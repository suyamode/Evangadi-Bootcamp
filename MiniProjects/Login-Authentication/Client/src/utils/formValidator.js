import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const validateForm = (schema, data) => {
  const result = schema.safeParse(data);
  if (result.success) {
    return { isValid: true, errors: {} };
  }

  const errors = {};
  result.error.issues.forEach((issue) => {
    const fieldName = issue.path[0];
    errors[fieldName] = issue.message;
  });

  return { isValid: false, errors };
};
