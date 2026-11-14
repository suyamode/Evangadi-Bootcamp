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
function calculateCosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;
  const len = vecA.length;

  for (let i = 0; i < len; i++) {
    const a = vecA[i];
    const b = vecB[i];
    dotProduct += a * b;
    magnitudeA += a * a;
    magnitudeB += b * b;
  }

  magnitudeA = Math.sqrt(magnitudeA);
  magnitudeB = Math.sqrt(magnitudeB);

  if (magnitudeA === 0 || magnitudeB === 0) return 0;
  return dotProduct / (magnitudeA * magnitudeB);
}
const vec1 = [1, 2, 3];
const vec2 = [2, 4, 6];
console.log("cosine similarity:", calculateCosineSimilarity(vec1, vec2));

async function compareTexts() {
  const text1 = "what is html in development?";
  const text2 = "what is hyper text markup language?";
  const text3 = "Nairobi is the capital of Kenya";

  try {
    const results = await ai.models.embedContent({
      model: GEMINI_EMBEDDING_MODEL,
      contents: [text1, text2, text3],
      config: {
        taskType: "SEMANTIC_SIMILARITY",
      },
    });

    const [embed1, embed2, embed3] = results.embeddings;

    console.log("Vector 1 length:", embed1.values.length);
    console.log("Vector 2 length:", embed2.values.length);
    console.log("Vector 3 length:", embed3.values.length);

    console.log(
      "Cosine similarity between text 1 and text 2:",
      calculateCosineSimilarity(embed1.values, embed2.values),
    );

    console.log(
      "Cosine similarity between text 1 and text 3:",
      calculateCosineSimilarity(embed1.values, embed3.values),
    );
  } catch (error) {
    console.log("Error generating embeddings:", error);
  }
}

compareTexts();
// generateEmbedding();
