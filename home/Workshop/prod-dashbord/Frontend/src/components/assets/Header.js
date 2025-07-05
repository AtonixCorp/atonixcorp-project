import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import LoginWelcomeCard from '../Cards/LoginWelcomeCard';
import logo from './logo512.png';

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#003153',
    padding: '10px 20px',
    color: 'white',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginRight: 'auto',
    padding: '10px 20px',
  },
  logoButton: {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  logo: {
    height: '40px',
    borderRadius: '50%',
    width: 'auto',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
  },
  logoText: {
    fontFamily: 'Montserrat, Helvetica Neue, sans-serif',
    fontSize: '2rem',
    fontWeight: 600,
    color: 'whitesmoke',
    padding: '5px 10px',
    background: 'linear-gradient(135deg, #ff69b4, #1e90ff)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginLeft: '20px',
  },
  navLink: {
    color: 'white',
    fontSize: '1rem',
    fontWeight: 500,
    background: 'none',
    border: 'none',
    padding: '0',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    margin: '0 10px',
    cursor: 'pointer',
  },
  searchBar: {
    padding: '5px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  translator: {
    padding: '5px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonText: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
};

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showLoginCard, setShowLoginCard] = useState(false);
  const navigate = useNavigate();

  const handleHover = (e, scale) => {
    const img = e.currentTarget.querySelector('img');
    if (img) img.style.transform = scale;
  };

  return (
    <header style={styles.navbar}>
      <div style={styles.logoContainer}>
        <button
          style={styles.logoButton}
          onMouseEnter={(e) => handleHover(e, 'scale(1.05)')}
          onMouseLeave={(e) => handleHover(e, 'scale(1.0)')}
          onFocus={(e) => handleHover(e, 'scale(1.05)')}
          onBlur={(e) => handleHover(e, 'scale(1.0)')}
          onClick={() => navigate('/')}
        >
          <img src={logo} alt="Logo" style={styles.logo} />
        </button>
        <span style={styles.logoText}>ATONIXCORP</span>
      </div>

      <nav style={styles.nav}>
        {['/',  '/Industry', '/Resources', '/atons&Innovation', '/Cybersecurity', '/developers', '/Community', '/products'].map((path, index) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            style={styles.navLink}
          >
            {['Home', 'Industry', 'Resources', 'atons&Innovation', 'Cybersecurity', 'Developers', 'Community', 'Products'][index]}
          </button>
        ))}
      </nav>

      <div style={styles.iconContainer}>
        <FontAwesomeIcon
          icon={faSearch}
          style={styles.icon}
          onClick={() => {
            setShowSearch(!showSearch);
            setShowLanguage(false);
          }}
        />
        {showSearch && (
          <input type="text" style={styles.searchBar} placeholder="Search..." />
        )}
        <FontAwesomeIcon
          icon={faGlobe}
          style={styles.icon}
          onClick={() => {
            setShowLanguage(!showLanguage);
            setShowSearch(false);
          }}
        />
        {showLanguage && (
          <select style={styles.translator}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        )}
      </div>

      <button style={styles.button} onClick={() => setShowLoginCard(true)}>
        <span style={styles.buttonText}>Log In To Hub</span>
      </button>

      {showLoginCard && (
        <LoginWelcomeCard
          show={showLoginCard}
          handleClose={() => setShowLoginCard(false)}
        />
      )}
    </header>
  );
};

export default Header;