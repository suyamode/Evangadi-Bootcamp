import { useCallback, useEffect, useState } from "react";
import Login from "./Components/Login";
import RegisterForm from "./Components/RegisterForm";
import Dashboard from "./Components/Dashboard";
import { getTokenExpiry } from "./utils/auth";

const clearStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// Restore a saved session on page load, but only if the token hasn't expired.
function readSession() {
  try {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const expiresAt = getTokenExpiry(token);
    if (token && user && expiresAt && expiresAt > Date.now()) {
      return { user, expiresAt };
    }
  } catch {
    /* fall through and clear */
  }
  clearStorage();
  return null;
}

export default function App() {
  const [session, setSession] = useState(readSession);
  const [view, setView] = useState("login"); // "login" | "register"
  const [notice, setNotice] = useState("");

  const handleLogout = useCallback((message = "") => {
    clearStorage();
    setSession(null);
    setView("login");
    setNotice(typeof message === "string" ? message : "");
  }, []);

  const handleLoginSuccess = ({ token, user }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setNotice("");
    setSession({ user, expiresAt: getTokenExpiry(token) });
  };

  // Sign the user out automatically when the token expires.
  useEffect(() => {
    if (!session?.expiresAt) return;
    const timer = setTimeout(
      () => handleLogout("Your session expired. Please sign in again."),
      Math.max(session.expiresAt - Date.now(), 0),
    );
    return () => clearTimeout(timer);
  }, [session, handleLogout]);

  if (session) {
    return (
      <Dashboard
        user={session.user}
        expiresAt={session.expiresAt}
        onLogout={() => handleLogout()}
      />
    );
  }

  if (view === "register") {
    return (
      <RegisterForm
        onSwitchToLogin={() => setView("login")}
        onRegistered={() => {
          setNotice("Account created successfully. Please sign in.");
          setView("login");
        }}
      />
    );
  }

  return (
    <Login
      notice={notice}
      onLoginSuccess={handleLoginSuccess}
      onSwitchToRegister={() => {
        setNotice("");
        setView("register");
      }}
    />
  );
}
