import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const location = useLocation();

  const hideNavbarPaths = ['/login', '/register', '/']; 

  const shouldShowNavbar = () => {
    return !hideNavbarPaths.includes(location.pathname);
  };

  if (!shouldShowNavbar()) {
    return null; 
  }

  return (
    <nav className={styles.navbar}>
      <ul>
     
        <li>
          <Link to="/posts" className={styles.navLink}>Posts</Link>
        </li>
        <li>
          <Link to="/comments" className={styles.navLink}>Comments</Link>
        </li>
        <li>
          <Link to="/images" className={styles.navLink}>Images</Link>
        </li>
        <li>
          <Link to="/" className={styles.navLinkLogout}>Log out</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
