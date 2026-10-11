import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./PasswordToggle.module.css";

const PasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      <div className={styles.formGroup}>
        <label htmlFor="user-name" className={styles.label}>
          User Name
        </label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="user-name"
            id="user-name"
            className={styles.inputField}
          />
        </div>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <div className={styles.inputWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            className={styles.inputField}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.toggleButton}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordToggle;
