import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db/db.config.js";
import mainRouter from "./src/api/main.routes.js";
import { errorHandler } from "./src/middleware/error-handler.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", mainRouter);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    const connection = await pool.getConnection();
    console.log("Database connected successfully.");
    connection.release();
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
}

startServer();
