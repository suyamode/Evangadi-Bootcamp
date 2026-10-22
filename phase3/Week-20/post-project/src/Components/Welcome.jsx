import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

export default function Welcome() {
  const { username, login, logout } = useAuth();
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      login(inputName);
      setInputName("");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1>Welcome Message</h1>
      {username ? (
        <div>
          <h2>Hello, {username}! 👋</h2>
          <button
            onClick={logout}
            style={{ padding: "8px 16px", margin: "10px" }}
          >
            Logout
          </button>
          <br />
          <button
            onClick={() => navigate("/posts")}
            style={{ padding: "8px 16px", marginTop: "10px" }}
          >
            Go to Posts
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin} style={{ marginTop: "20px" }}>
          <h3>Login to set username</h3>
          <input
            type="text"
            placeholder="Enter username..."
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            style={{ padding: "8px", marginRight: "10px", width: "200px" }}
          />
          <button type="submit" style={{ padding: "8px 16px" }}>
            Set Username
          </button>
        </form>
      )}
    </div>
  );
}
