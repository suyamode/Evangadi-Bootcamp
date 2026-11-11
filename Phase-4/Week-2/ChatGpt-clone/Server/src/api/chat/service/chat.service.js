import db from "../../../../db/db.config.js";
import { GoogleGenAI } from "@google/genai";

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-1.5-flash";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const createGeminiClient = () => {
  if (!GEMINI_API_KEY) {
    throw new Error(
      "GEMINI_API_KEY is not defined in the environment variables",
    );
  }
  return new GoogleGenAI({ apiKey: GEMINI_API_KEY });
};

export async function createConversationService(question) {
  try {
    if (!question || !question.trim()) {
      const error = new Error("Question is required");
      error.statusCode = 400;
      throw error;
    }

    // 1. Fetch recent history BEFORE inserting the new user message
    const historyRows = await getRecentConversationRows(5);

    // 2. Insert the new user question into the DB and grab its ID
    const [userResult] = await db.execute(
      "INSERT INTO conversations (role, content) VALUES (?, ?)",
      ["user", question],
    );
    const userMessageId = userResult.insertId;

    // 3. Generate the assistant's answer using Gemini Chats API
    const { text, totalTokens, model } = await generateAssistantAnswer({
      historyRows,
      question,
    });

    // 4. Save the assistant's response to the database and grab its ID
    const [assistantResult] = await db.execute(
      "INSERT INTO conversations (role, content, token_count) VALUES (?, ?, ?)",
      ["assistant", text, totalTokens || 0],
    );
    const assistantMessageId = assistantResult.insertId;

    // 5. Fetch both records from the database
    const userConversation = await getMessageById(userMessageId);
    const assistantConversation = await getMessageById(assistantMessageId);

    // 6. Return both messages and metadata
    return {
      user: userConversation,
      assistant: assistantConversation,
      model,
      totalTokens,
    };
  } catch (error) {
    throw error;
  }
}
const getRecentConversationRows = async (limit = 5) => {
  const normalizedLimit = parseInt(limit, 10);
  const safeLimit =
    isNaN(normalizedLimit) || normalizedLimit <= 0 ? 20 : normalizedLimit;

  const [rows] = await db.execute(
    "SELECT id, role, content, created_at FROM conversations ORDER BY id DESC LIMIT ?",
    [safeLimit],
  );

  return rows.reverse();
};

export async function getConversationService() {
  return getRecentConversationRows(20);
}

export async function generateAssistantAnswer({ historyRows, question }) {
  try {
    const client = createGeminiClient();

    const formattedHistory = historyRows.map((row) => ({
      role: row.role === "assistant" ? "model" : "user",
      parts: [{ text: row.content }],
    }));

    const chat = client.chats.create({
      model: GEMINI_MODEL,
      history: formattedHistory,
      config: {
        maxOutputTokens: 1024,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage({ message: question });

    // Extract token count correctly from usageMetadata
    const totalTokens = result.usageMetadata?.totalTokenCount || 0;

    return {
      text: result.text,
      totalTokens: totalTokens,
      model: GEMINI_MODEL,
    };
  } catch (error) {
    throw error;
  }
}
const getMessageById = async (messageId) => {
  const [rows] = await db.execute(
    "SELECT id, role, content, created_at FROM conversations WHERE id = ? LIMIT 1",
    [messageId],
  );
  if (!rows[0]) {
    const error = new Error(`Message with ID ${messageId} not found`);
    error.statusCode = 404;
    throw error;
  }
  return {
    id: rows[0].id,
    role: rows[0].role,
    content: rows[0].content,
    created_at: rows[0].created_at,
  };
};
