import React from "react";

function Dashboard({ onLogout }) {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};
  const userName = storedUser.first_name
    ? `${storedUser.first_name} ${storedUser.last_name}`
    : "Developer";
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Welcome back, {userName}! 🎉</h1>
      <p>You have successfully logged into your secure MERN dashboard.</p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={onLogout}
          style={{
            padding: "10px 20px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
