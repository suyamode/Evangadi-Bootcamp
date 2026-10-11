import React from "react";
import { useState } from "react";
import styles from "./IncreaseDecreaseCount.module.css";
function IncreaseDecreaseCount() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h2>Current Count: {count}</h2>
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
          class="reset"
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
