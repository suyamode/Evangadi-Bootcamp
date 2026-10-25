import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validations/authValidation";
import { registerUser } from "../Services/api";
import AuthLayout from "./AuthLayout";
import { Alert, FormField, PasswordField, PrimaryButton } from "./ui";

const rules = [
  { label: "8+ characters", test: (p) => p.length >= 8 },
  { label: "Uppercase letter", test: (p) => /[A-Z]/.test(p) },
  { label: "Lowercase letter", test: (p) => /[a-z]/.test(p) },
  { label: "Number", test: (p) => /[0-9]/.test(p) },
  { label: "Special character", test: (p) => /[^A-Za-z0-9]/.test(p) },
];

const strengthMeta = [
  { label: "", bar: "bg-slate-200", text: "text-slate-400" },
  { label: "Very weak", bar: "bg-red-500", text: "text-red-600" },
  { label: "Weak", bar: "bg-orange-500", text: "text-orange-600" },
  { label: "Fair", bar: "bg-amber-500", text: "text-amber-600" },
  { label: "Good", bar: "bg-lime-500", text: "text-lime-600" },
  { label: "Strong", bar: "bg-emerald-500", text: "text-emerald-600" },
];

function PasswordStrength({ password }) {
  const passed = rules.filter((r) => r.test(password)).length;
  const meta = strengthMeta[password ? passed : 0];

  return (
    <div className="mt-3">
      <div className="flex gap-1.5">
        {rules.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < passed && password ? meta.bar : "bg-slate-200"
            }`}
          />
        ))}
      </div>
      <div className="mt-2 flex items-start justify-between gap-3">
        <ul className="grid flex-1 grid-cols-2 gap-x-3 gap-y-1">
          {rules.map((r) => {
            const ok = r.test(password);
            return (
              <li
                key={r.label}
                className={`flex items-center gap-1.5 text-xs ${
                  ok ? "text-emerald-600" : "text-slate-400"
                }`}
              >
                <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  {ok ? (
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.58 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z" clipRule="evenodd" />
                  ) : (
                    <circle cx="10" cy="10" r="3" />
                  )}
                </svg>
                {r.label}
              </li>
            );
          })}
        </ul>
        {password && (
          <span className={`text-xs font-semibold ${meta.text}`}>{meta.label}</span>
        )}
      </div>
    </div>
  );
}

export default function RegisterForm({ onRegistered, onSwitchToLogin }) {
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const password = watch("password") || "";

  const onSubmit = async (values) => {
    setServerError("");
    try {
      await registerUser(values);
      onRegistered();
    } catch (err) {
      setServerError(err.message);
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Get started in less than a minute."
      footer={
        <>
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </button>
        </>
      }
    >
      {serverError && <Alert>{serverError}</Alert>}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            id="firstName"
            label="First name"
            autoComplete="given-name"
            placeholder="John"
            error={errors.firstName?.message}
            {...register("firstName")}
          />
          <FormField
            id="lastName"
            label="Last name"
            autoComplete="family-name"
            placeholder="Doe"
            error={errors.lastName?.message}
            {...register("lastName")}
          />
        </div>

        <FormField
          id="email"
          label="Email address"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register("email")}
        />

        <div>
          <PasswordField
            id="password"
            label="Password"
            autoComplete="new-password"
            placeholder="Create a strong password"
            error={errors.password?.message}
            {...register("password")}
          />
          <PasswordStrength password={password} />
        </div>

        <PrimaryButton loading={isSubmitting} loadingText="Creating account...">
          Create account
        </PrimaryButton>
      </form>
    </AuthLayout>
  );
}
