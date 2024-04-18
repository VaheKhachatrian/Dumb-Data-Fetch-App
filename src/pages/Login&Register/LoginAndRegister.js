import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginAndRegister.module.css"; 

export default function LoginAndRegister() {
  return (
    <div className={styles.commentsPage}>
      <h2>Welcome To Dumb Data Fetch App</h2>
      <div className={styles.buttonContainer}>
        <Link to="/login" className={styles.buttonLink}>
          <button className={styles.button}>Login</button>
        </Link>

        <Link to="/register" className={styles.buttonLink}>
          <button className={`${styles.button} ${styles.registerButton}`}>
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
