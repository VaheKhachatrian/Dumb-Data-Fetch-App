import React from 'react';
import styles from './UsernameInput.module.css'; 

const UsernameInput = ({ value, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="username" className={styles.label}>Username:</label>
      <input
        type="text"
        id="username"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}

export default UsernameInput;
