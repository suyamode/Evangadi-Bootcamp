import "./config/db.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server started listening at http://localhost:${PORT}`);
});
