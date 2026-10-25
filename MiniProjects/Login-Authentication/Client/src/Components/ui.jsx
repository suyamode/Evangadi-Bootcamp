import { useState } from "react";

const inputBase =
  "block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:outline-none focus:ring-4";

const inputState = (error) =>
  error
    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
    : "border-slate-300 hover:border-slate-400 focus:border-indigo-500 focus:ring-indigo-100";

export function FormField({ label, id, error, ...inputProps }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputBase} ${inputState(error)}`}
        {...inputProps}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function PasswordField({ label, id, error, ...inputProps }) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${inputBase} ${inputState(error)} pr-11`}
          {...inputProps}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute inset-y-0 right-0 flex w-11 cursor-pointer items-center justify-center rounded-r-lg text-slate-400 transition hover:text-slate-600 focus:outline-none focus-visible:text-indigo-600"
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function Alert({ variant = "error", children }) {
  const styles =
    variant === "success"
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : "border-red-200 bg-red-50 text-red-800";
  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      className={`mb-5 flex items-start gap-2.5 rounded-lg border px-3.5 py-3 text-sm ${styles}`}
    >
      <svg
        className="mt-0.5 h-4 w-4 shrink-0"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        {variant === "success" ? (
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.58 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
            clipRule="evenodd"
          />
        ) : (
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-4a1 1 0 011 1v3a1 1 0 11-2 0V7a1 1 0 011-1zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        )}
      </svg>
      <div>{children}</div>
    </div>
  );
}

export function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
      <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-90" />
    </svg>
  );
}

export function PrimaryButton({ loading, loadingText, children, ...props }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      {...props}
    >
      {loading && <Spinner />}
      {loading ? loadingText : children}
    </button>
  );
}

export function LogoMark({ className = "h-9 w-9" }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ${className}`}
    >
      <svg className="h-1/2 w-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 3v6c0 4.5-3.2 8.2-8 9-4.8-.8-8-4.5-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    </span>
  );
}

function EyeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.9 17.9A10.9 10.9 0 0112 19c-6.4 0-10-7-10-7a18.5 18.5 0 015.1-5.9M9.9 4.2A10 10 0 0112 4c6.4 0 10 7 10 7a18.5 18.5 0 01-2.2 3.2M1 1l22 22" />
      <path d="M14.1 14.1a3 3 0 11-4.2-4.2" />
    </svg>
  );
}
