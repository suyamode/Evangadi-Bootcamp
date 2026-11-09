import db from "../../../../db/db.config.js";
export async function createCoversationService(question) {
  try {
    if (!question.trim()) {
      const error = new Error("Question is required");
      error.statusCode = 400;
      throw error;
    }
    await db.execute("INSERT INTO conversations (content) VALUES (?)", [
      question,
    ]);
    return "chat saved to db with question: " + question;
  } catch (error) {
    throw error;
  }
}
const getRecentConversationRows = async (limit = 5) => {
  const normalizedLimit = parseInt(limit, 10);
  const safeLimit =
    isNaN(normalizedLimit) || normalizedLimit <= 0 ? 20 : normalizedLimit;
  const [rows] = await db.execute(
    "SELECT id,role,content,created_at FROM conversations ORDER BY id DESC LIMIT ?",
    [safeLimit],
  );

  return rows.reverse();
};
