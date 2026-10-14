import React, { useState } from "react";

function ThemeToggle({ children }) {
  const bgColors = {
    light: "#F5F5F5",
    dark: "#17212B",
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? bgColors.dark : bgColors.light,
        minHeight: "100vh",
        width: "100%",
        padding: "20px",
      }}
    >
      <button
        style={{
          color: "black",
        }}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
      <div style={{ marginTop: "20px" }}>{children}</div>
    </div>
  );
}

export default ThemeToggle;
