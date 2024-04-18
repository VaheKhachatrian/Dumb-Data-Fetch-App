
import React, { useContext } from 'react';
import UsernameInput from '../../components/UsernameInput';
import PasswordInput from '../../components/PasswordInput';
import { Link } from 'react-router-dom';
import styles from './Registration.module.css';
import RegistrationContext from '../../components/contexts/RegistartionContext';

const Registration = () => {
  const { registrationData, updateRegistrationData } = useContext(
    RegistrationContext
  );

  const { username, password, registered } = registrationData;

  const handleUsernameChange = (e) => {
    updateRegistrationData({ username: e.target.value });
  };

  const handlePasswordChange = (e) => {
    updateRegistrationData({ password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRegistrationData({ registered: true });
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Registration</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <UsernameInput value={username} onChange={handleUsernameChange} />
        <PasswordInput value={password} onChange={handlePasswordChange} />
        <div className={styles.buttonContainer}>
          <Link to="/" className={styles.cancelButton}>
            Cancel
          </Link>
          {registered ? (
            <button
              type="submit"
              className={`${styles.loginButton} ${styles.link}`}
            >
              Register
            </button>
          ) : (
            <button type="submit" className={styles.loginButton}>
              Register
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Registration;
