import React, { useState } from "react";
import style from "./ThemeToggle.module.css";

function ThemeToggle({ children }) {
  const bgColors = {
    light: "#F5F5F5",
    dark: "#17212B",
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={style["toggle-div"]}
      style={{
        backgroundColor: isDarkMode ? bgColors.dark : bgColors.light,
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
      <div className={style["children-div"]}>{children}</div>
    </div>
  );
}

export default ThemeToggle;
