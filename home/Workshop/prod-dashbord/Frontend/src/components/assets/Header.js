import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import LoginWelcomeCard from '../Cards/LoginWelcomeCard';
import logo from './logo512.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Industry', path: '/Industry' },
  { label: 'Resources', path: '/Resources' },
  { label: 'atons&Innovation', path: '/atons&Innovation' },
  { label: 'Cybersecurity', path: '/Cybersecurity' },
  { label: 'Developers', path: '/developers' },
  { label: 'Community', path: '/Community' },
  { label: 'Products', path: '/products' }
];

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff', // White background
    padding: '10px 20px',
    color: '#003153',
    flexWrap: 'wrap',
    overflowX: 'hidden',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginRight: 'auto',
    padding: '10px 0',
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
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
  },
  logoText: {
    fontFamily: 'Playfair Display, Georgia, serif',
    fontSize: '1.8rem',
    fontWeight: 500,
    color: '#003153',
    letterSpacing: '1px',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginLeft: '20px',
  },
  navLink: {
    color: '#003153',
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
    gap: '10px',
  },
  icon: {
    cursor: 'pointer',
    fontSize: '1.2rem',
    color: '#003153',
  },
  searchBar: {
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  translator: {
    padding: '5px',
    border: '1px solid #ccc',
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
    marginLeft: '10px'
  },
  buttonText: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  mobileMenu: {
    display: 'none',
    flexDirection: 'column',
    padding: '10px 0',
  }
};

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showLoginCard, setShowLoginCard] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleHover = (e, scale) => {
    const img = e.currentTarget.querySelector('img');
    if (img) img.style.transform = scale;
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <header style={styles.navbar}>
      <div style={styles.logoContainer}>
        <span style={styles.logoText}>AtonixCorp</span>
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
      </div>

      {isMobile ? (
        <>
          <FontAwesomeIcon icon={faBars} style={styles.icon} onClick={() => setShowMobileMenu(!showMobileMenu)} />
          {showMobileMenu && (
            <div style={styles.mobileMenu}>
              {navLinks.map(({ label, path }) => (
                <button key={path} onClick={() => navigate(path)} style={styles.navLink}>
                  {label}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <nav style={styles.nav}>
          {navLinks.map(({ label, path }) => (
            <button key={path} onClick={() => navigate(path)} style={styles.navLink}>
              {label}
            </button>
          ))}
        </nav>
      )}

      <div style={styles.iconContainer}>
        <FontAwesomeIcon
          icon={faSearch}
          style={styles.icon}
          onClick={() => {
            setShowSearch(!showSearch);
            setShowLanguage(false);
          }}
        />
        {showSearch && <input type="text" style={styles.searchBar} placeholder="Search..." />}

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
        <LoginWelcomeCard show={showLoginCard} handleClose={() => setShowLoginCard(false)} />
      )}
    </header>
  );
};

export default Header;