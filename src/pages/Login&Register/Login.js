import React, { useState, useContext } from 'react';
import UsernameInput from '../../components/UsernameInput';
import PasswordInput from '../../components/PasswordInput';
import { Link } from 'react-router-dom';
import styles from './Login.module.css'; 
import RegistrationContext from '../../components/contexts/RegistartionContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const { registrationData } = useContext(RegistrationContext);

  const { registered, username: storedUsername, password: storedPassword } = registrationData;

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === storedUsername && password === storedPassword && registered) {
      setLoggedIn(true);
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <UsernameInput value={username} onChange={handleUsernameChange} />
          <PasswordInput value={password} onChange={handlePasswordChange} />
          <div className={styles.buttonContainer}>
            <Link to="/" className={styles.cancelButton}>Cancel</Link>
            {loggedIn ? (
              <Link to='/posts'>
                <button type="submit" className={`${styles.loginButton} ${styles.link}`}>Login</button>
              </Link>
            ) : (
              <button type="submit" className={styles.loginButton}>Login</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
