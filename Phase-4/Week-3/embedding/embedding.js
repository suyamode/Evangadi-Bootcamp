import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// Using the recommended default text embedding model if not specified in your .env
const GEMINI_EMBEDDING_MODEL =
  process.env.GEMINI_EMBEDDING_MODEL || "text-embedding-004";

if (!GEMINI_API_KEY) {
  throw new Error("Api key required!!");
}

// Initialize the GoogleGenAI client correctly
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function generateEmbedding() {
  try {
    let text = "hello, this is a test for vector embeddings.";

    // Fixed: Use 'ai.models.embedContent' (removed duplicate 'await')
    const result = await ai.models.embedContent({
      model: GEMINI_EMBEDDING_MODEL,
      contents: text,
      config: {
        outputDimentionality: 64,
      },
    });

    console.log(result);
    console.log(result.embeddings[0]);
  } catch (error) {
    console.log(error);
  }
}

generateEmbedding();
