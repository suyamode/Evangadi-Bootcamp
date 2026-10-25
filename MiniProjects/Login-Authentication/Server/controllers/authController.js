import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { loginSchema } from "../validations/authValidations.js";

const getJwtSecret = () => {
  if (process.env.JWT_SECRET) return process.env.JWT_SECRET;
  if (process.env.NODE_ENV === "production") {
    throw new Error("JWT_SECRET is not set");
  }
  console.warn("WARNING: JWT_SECRET missing in .env, using an insecure dev secret.");
  return "dev_only_secret";
};

export const login = async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      message: parsed.error.issues[0].message,
    });
  }

  const { email, password } = parsed.data;

  try {
    const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

    if (users.length === 0) {
      console.log(`[login] no user found for email: ${email}`);
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const user = users[0];

    // A bcrypt hash is always 60 characters. If this prints something else,
    // the password column is too short or the row holds a plain-text password.
    console.log(`[login] stored hash length for ${email}: ${user.password?.length}`);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log(`[login] password mismatch for ${email}`);
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign({ email: user.email }, getJwtSecret(), {
      expiresIn: "1h",
    });

    return res.status(200).json({
      message: "Login successful!",
      token,
      user: {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Server error during login." });
  }
};
