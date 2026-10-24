import db from "./config/db.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.listen(PORT, () => {
  console.log(`Server started listening at http://localhost:${PORT}`);
});
