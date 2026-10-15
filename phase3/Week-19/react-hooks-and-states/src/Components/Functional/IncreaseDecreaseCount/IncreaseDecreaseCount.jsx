import React, { useState, useContext } from "react";
// Import the ThemeContext from your ThemeToggle file (adjust relative path as needed)
import { ThemeContext } from "../ThemeToggle/ThemeToggle";
import styles from "./IncreaseDecreaseCount.module.css";

function IncreaseDecreaseCount() {
  const [count, setCount] = useState(0);

  // 1. Grab isDarkMode and toggleTheme using useContext
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="container"
      style={{
        // 2. Conditionally change styles based on theme
        color: isDarkMode ? "#FFFFFF" : "#000000",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>Current Count: {count}</h2>

      {/* Optional: You can even trigger the theme toggle from inside here! */}
      <button
        onClick={toggleTheme}
        style={{ marginBottom: "15px", padding: "6px 12px" }}
      >
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>

      <div className={`${styles["btn-container"]}`}>
        <button
          className={styles["plus-btn"]}
          onClick={() => {
            setCount((prevState) => prevState + 1);
          }}
        >
          Increase
        </button>
        <button
          className={styles["minus-btn"]}
          onClick={() => {
            setCount((prevState) => prevState - 1);
          }}
        >
          Decrease
        </button>
        <button
          className="reset"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default IncreaseDecreaseCount;
