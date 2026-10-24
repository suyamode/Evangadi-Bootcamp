import express from "express";
import bcrypt from "bcrypt";
import db from "../config/db.js";
import { registerSchema } from "../../Client/src/validations/authValidation.js";
import { login } from "../controllers/authController.js";
const router = express.Router();
router.post("/register", async (req, res) => {
  try {
    const validatedData = registerSchema.parse(req.body);
    const { firstName, lastName, email, password } = validatedData;
    const [existingUsers] = await db.query(
      "SELECT * FROM users WHERE email=?",
      [email],
    );
    if (existingUsers.length > 0) {
      return res.status(400).json({ message: "Email is already registered" });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const query = `INSERT INTO users (first_name,last_name,email,password) VALUES (?,?,?,?)`;
    await db.query(query, [firstName, lastName, email, hashedPassword]);
    return res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({ errors: error.issues });
    }
    console.error("Registartion error", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/login", login);
export default router;
