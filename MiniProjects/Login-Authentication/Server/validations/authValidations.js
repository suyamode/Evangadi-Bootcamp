import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email format!"),
  password: z.string().min(6, "password must be atleast 6 characters long"),
});
