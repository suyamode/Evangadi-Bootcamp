import { LogoMark } from "./ui";

export const BRAND = "Authly";

const features = [
  {
    title: "Secure by default",
    text: "Passwords are hashed with bcrypt and sessions use signed tokens.",
  },
  {
    title: "Fast to get started",
    text: "Create an account in under a minute, no card required.",
  },
  {
    title: "Built for teams",
    text: "One place for your projects, activity and account settings.",
  },
];

export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="grid min-h-screen bg-white lg:grid-cols-2">
      {/* Brand panel (desktop only) */}
      <aside className="relative hidden flex-col justify-between overflow-hidden bg-slate-950 p-12 text-white lg:flex">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-24 h-112 w-md rounded-full bg-violet-600/20 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative flex items-center gap-3">
          <LogoMark />
          <span className="text-lg font-semibold tracking-tight">{BRAND}</span>
        </div>

        <div className="relative max-w-md">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight">
            Everything you need,
            <span className="text-indigo-400"> one sign-in away.</span>
          </h2>
          <ul className="mt-10 space-y-6">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-400/30">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium">{f.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-sm text-slate-500">
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </p>
      </aside>

      {/* Form panel */}
      <main className="flex items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-md">
          <div className="mb-10 flex items-center gap-3 lg:hidden">
            <LogoMark />
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              {BRAND}
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            {title}
          </h1>
          <p className="mt-2 text-sm text-slate-500">{subtitle}</p>

          <div className="mt-8">{children}</div>

          <p className="mt-8 text-center text-sm text-slate-500">{footer}</p>
        </div>
      </main>
    </div>
  );
}
