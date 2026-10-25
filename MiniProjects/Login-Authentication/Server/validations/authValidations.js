import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email("Invalid email format!"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Same rules as Client/src/validations/authValidation.js.
// Kept here so the server doesn't import files from the Client folder.
export const registerSchema = z.object({
  firstName: z.string().trim().min(2, "First name must be at least 2 characters"),
  lastName: z.string().trim().min(2, "Last name must be at least 2 characters"),
  email: z.string().trim().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});
