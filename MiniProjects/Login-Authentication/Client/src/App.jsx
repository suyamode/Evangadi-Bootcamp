import RegisterForm from "./Components/RegisterForm";
import React, { useState, useEffect } from "react";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard"; // Or whatever your welcome/dashboard component is named

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check localStorage on initial load to keep user logged in on refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      setIsAuthenticated(true);
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  // Handle successful login from Login component
  const handleLoginSuccess = (userData) => {
    setIsAuthenticated(true);
    setCurrentUser(userData);
  };

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <div>
      {isAuthenticated ? (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}
