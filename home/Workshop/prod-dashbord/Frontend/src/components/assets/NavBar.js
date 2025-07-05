import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SignUp from '../account/SignUp';
import SignIn from '../account/SignIn';
import logo from '../images/logo512.png';

const NavBar = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  const toggleSignIn = () => setShowSignUp(false);
  const toggleSignUp = () => setShowSignUp(true);

  return (
    <nav
      style={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '10px',
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #444',
        zIndex: 1000
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
        <img src={logo} alt="Logo" style={{ height: '40px' }} />
      </Link>

      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/" style={{ color: '#fff' }}>Home</Link>
        <Link to="/projects" style={{ color: '#fff' }}>Projects</Link>
        <a href="https://community.atonixcorp.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>Community</a>
        <Link to="/research" style={{ color: '#fff' }}>Research</Link>
        <Link to="/register" style={{ color: '#fff' }}>Blog</Link>
        <Link to="/about" style={{ color: '#fff' }}>About Us</Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input
          type="search"
          placeholder="Search"
          style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        <button onClick={() => setShowSignUp(true)} style={{ padding: '6px 12px' }}>
          Sign Up
        </button>

        <button onClick={() => setShowSignUp(false)} style={{ padding: '6px 12px' }}>
          Sign In
        </button>
      </div>

      {/* Modals (basic conditional render simulation) */}
      {showSignUp && (
        <div style={{
          position: 'fixed', top: 60, right: 20, backgroundColor: '#fff',
          color: '#000', padding: '20px', border: '1px solid #ccc', borderRadius: '6px'
        }}>
          <h3>Sign Up</h3>
          <SignUp toggleSignIn={toggleSignIn} onClose={() => setShowSignUp(false)} />
        </div>
      )}

      {!showSignUp && (
        <div style={{
          position: 'fixed', top: 60, right: 20, backgroundColor: '#fff',
          color: '#000', padding: '20px', border: '1px solid #ccc', borderRadius: '6px'
        }}>
          <h3>Sign In</h3>
          <SignIn toggleSignUp={toggleSignUp} onClose={() => setShowSignUp(true)} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;