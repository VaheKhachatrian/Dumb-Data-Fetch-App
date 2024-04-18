import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts';
import Comments from './pages/Comments';
import Images from './pages/Images';
import LoginAndRegister from './pages/Login&Register/LoginAndRegister';
import Login from './pages/Login&Register/Login';
import Register from './pages/Login&Register/Register';
import Navbar from './components/Navbar';
import { RegistrationProvider } from './components/contexts/RegistartionContext';
import './App.css';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  const hideNavbarPaths = ['/login', '/register', '/']; 
  const shouldShowNavbar = () => {
    return !hideNavbarPaths.includes(window.location.pathname);
  };

  window.onpopstate = () => {
    setShowNavbar(shouldShowNavbar());
  };

  return (
    <Router>
      <RegistrationProvider>
        <div className="App">
          {showNavbar && <Navbar />}
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/images" element={<Images />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<LoginAndRegister />} />
          </Routes>
        </div>
      </RegistrationProvider>
    </Router>
  );
}

export default App;
