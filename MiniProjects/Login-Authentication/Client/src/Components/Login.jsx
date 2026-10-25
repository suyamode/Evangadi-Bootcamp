import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../utils/formValidator";
import { loginUser } from "../Services/api";
import AuthLayout from "./AuthLayout";
import { Alert, FormField, PasswordField, PrimaryButton } from "./ui";

export default function Login({ onLoginSuccess, onSwitchToRegister, notice }) {
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(loginFormSchema) });

  const onSubmit = async (values) => {
    setServerError("");
    try {
      const data = await loginUser(values);
      onLoginSuccess(data); // { token, user }
    } catch (err) {
      setServerError(err.message);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToRegister}
            className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Create one
          </button>
        </>
      }
    >
      {notice && <Alert variant="success">{notice}</Alert>}
      {serverError && <Alert>{serverError}</Alert>}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <FormField
          id="email"
          label="Email address"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
        <PasswordField
          id="password"
          label="Password"
          autoComplete="current-password"
          placeholder="Enter your password"
          error={errors.password?.message}
          {...register("password")}
        />
        <PrimaryButton loading={isSubmitting} loadingText="Signing in...">
          Sign in
        </PrimaryButton>
      </form>
    </AuthLayout>
  );
}
