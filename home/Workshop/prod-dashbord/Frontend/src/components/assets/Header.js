import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './logo512.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/AboutUs' },
  { label: 'Resources', path: '/Resources' },
  { label: 'atons & Innovation', path: '/atons&Innovation' },
  { label: 'Cybersecurity', path: '/Cybersecurity' },
  { label: 'Developers', path: '/Developers' },
  { label: 'Community', path: '/community' },
  { label: 'Industry', path: '/industry' }
];

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: '10px 20px',
    color: '#003153',
    flexWrap: 'wrap',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoButton: {
    all: 'unset',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
    borderRadius: '50%',
    transition: 'transform 0.3s ease',
  },
  logoText: {
    fontSize: '1.8rem',
    fontWeight: 600,
    fontFamily: 'Playfair Display, Georgia, serif',
    color: '#003153',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  navLink: {
    fontSize: '1rem',
    fontWeight: 500,
    color: '#003153',
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    transition: 'color 0.3s ease, background-color 0.3s ease',
    cursor: 'pointer',
  },
  activeLink: {
    color: '#0d9494',
    fontWeight: 700,
    backgroundColor: '#e6f4f4',
  },
  icon: {
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#003153',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '100%',
    padding: '10px 0',
  },
};

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const handleNavigate = (path) => {
    navigate(path);
    setShowMobileMenu(false);
  };

  const getLinkStyle = (path) => ({
    ...styles.navLink,
    ...(location.pathname === path ? styles.activeLink : {}),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <span style={styles.logoText}>AtonixCorp</span>
        <button
          style={styles.logoButton}
          onClick={() => handleNavigate('/')}
          onMouseEnter={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1)'; }}
        >
          <img src={logo} alt="Logo" style={styles.logo} />
        </button>
      </div>

      {/* Links */}
      {isMobile ? (
        <>
          <FontAwesomeIcon
            icon={faBars}
            style={styles.icon}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
          {showMobileMenu && (
            <div style={styles.mobileMenu}>
              {navLinks.map(({ label, path }) => (
                <button
                  key={path}
                  onClick={() => handleNavigate(path)}
                  style={getLinkStyle(path)}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <nav style={styles.nav}>
          {navLinks.map(({ label, path }) => (
            <button
              key={path}
              onClick={() => handleNavigate(path)}
              style={getLinkStyle(path)}
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;