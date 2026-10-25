import express from "express";
import bcrypt from "bcrypt";
import db from "../config/db.js";
import { registerSchema } from "../validations/authValidations.js";
import { login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = registerSchema.parse(
      req.body,
    );

    const [existingUsers] = await db.query(
      "SELECT email FROM users WHERE email = ?",
      [email],
    );
    if (existingUsers.length > 0) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
      [firstName, lastName, email, hashedPassword],
    );

    return res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({ message: error.issues[0].message });
    }
    console.error("Registration error", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/login", login);

export default router;
