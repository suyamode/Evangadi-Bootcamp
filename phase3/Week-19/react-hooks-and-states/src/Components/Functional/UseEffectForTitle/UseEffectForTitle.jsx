import React from "react";
import { useState, useEffect } from "react";
import styles from "./UseEffects.module.css";

const UseEffectForTitle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("Component is mounted");
  }, []);
  useEffect(() => {
    document.title = `Current Count:${count}`;
  }, [count]);
  return (
    <div className={`container ${styles["content-wrapper"]}`}>
      <button
        className={styles["useEffect-btn"]}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Click Me
      </button>
      <p>Count: {count}</p>
    </div>
  );
};

export default UseEffectForTitle;
