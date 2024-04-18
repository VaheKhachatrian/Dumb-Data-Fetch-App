import React from 'react';
import styles from './PasswordInput.module.css'; 

const PasswordInput = ({ value, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="password" className={styles.label}>Password:</label>
      <input
        type="password"
        id="password"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}

export default PasswordInput;
