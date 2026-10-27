import { BRAND } from "./AuthLayout";
import { LogoMark } from "./ui";

// Sample data so the layout looks real. Replace with API data later.
const stats = [
  { label: "Active projects", value: "12", change: "+2 this week", up: true },
  { label: "Tasks completed", value: "148", change: "+18%", up: true },
  { label: "Team members", value: "5", change: "No change", up: null },
  { label: "Open issues", value: "7", change: "-3 this week", up: true },
];

const activity = [
  { title: "Account created", detail: "Welcome aboard!", time: "Just now" },
  { title: "Signed in", detail: "New session started on this device", time: "Just now" },
  { title: "Profile ready", detail: "Your profile has been set up", time: "Today" },
];

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

function formatTime(ms) {
  return new Date(ms).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function Dashboard({ user, expiresAt, onLogout }) {
  const firstName = user?.first_name || "";
  const fullName = [user?.first_name, user?.last_name].filter(Boolean).join(" ");
  const displayName = fullName || user?.email || "User";
  const initials = (
    fullName
      ? `${user.first_name[0]}${user.last_name?.[0] || ""}`
      : user?.email?.[0] || "U"
  ).toUpperCase();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8" />
            <span className="font-semibold tracking-tight">{BRAND}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium leading-tight text-slate-900">{displayName}</p>
              <p className="text-xs text-slate-500">{user?.email}</p>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
              {initials}
            </span>
            <button
              onClick={onLogout}
              className="cursor-pointer rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {/* Welcome banner */}
        <section className="relative overflow-hidden rounded-2xl bg-linear-to-br from-indigo-600 to-violet-600 px-6 py-8 text-white shadow-lg shadow-indigo-600/20 sm:px-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <p className="relative text-sm font-medium text-indigo-100">{greeting()}</p>
          <h1 className="relative mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
            Welcome back{firstName ? `, ${firstName}` : ""} 👋
          </h1>
          <p className="relative mt-2 max-w-xl text-sm text-indigo-100">
            You&apos;re signed in securely. Here&apos;s a quick overview of your workspace.
          </p>
        </section>

        {/* Stats */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">{s.label}</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{s.value}</p>
              <p
                className={`mt-2 text-xs font-medium ${
                  s.up === null ? "text-slate-400" : s.up ? "text-emerald-600" : "text-red-600"
                }`}
              >
                {s.change}
              </p>
            </div>
          ))}
        </section>

        {/* Details */}
        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
            <div className="border-b border-slate-100 px-5 py-4">
              <h2 className="font-semibold text-slate-900">Recent activity</h2>
            </div>
            <ul className="divide-y divide-slate-100">
              {activity.map((a) => (
                <li key={a.title} className="flex items-start gap-4 px-5 py-4">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">{a.title}</p>
                    <p className="text-sm text-slate-500">{a.detail}</p>
                  </div>
                  <span className="text-xs text-slate-400">{a.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
              <h2 className="font-semibold text-slate-900">Your account</h2>
            </div>
            <dl className="space-y-4 px-5 py-4 text-sm">
              <div>
                <dt className="text-slate-500">Name</dt>
                <dd className="mt-0.5 font-medium text-slate-900">{fullName || "Not set"}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Email</dt>
                <dd className="mt-0.5 break-all font-medium text-slate-900">{user?.email}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Session</dt>
                <dd className="mt-0.5 flex items-center gap-2 font-medium text-slate-900">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Active{expiresAt ? ` · expires ${formatTime(expiresAt)}` : ""}
                </dd>
              </div>
            </dl>
          </div>
        </section>
        <p className="mt-6 text-center text-xs text-slate-400">Stats and activity shown are sample data.</p>
      </main>
    </div>
  );
}
