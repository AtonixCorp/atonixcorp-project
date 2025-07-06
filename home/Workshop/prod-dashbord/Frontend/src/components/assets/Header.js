import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './logo512.png';

const navLinks = [
  { label: 'About Us', path: '/AboutUs' },
  { label: 'Home', path: '/' },
  { label: 'Resources', path: '/Resources' },
  { label: 'atons&Innovation', path: '/atons&Innovation' },
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
    overflowX: 'hidden',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
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
  icon: {
    cursor: 'pointer',
    fontSize: '1.2rem',
    color: '#003153',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 0',
  },
};

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

  const handleHover = (e, scale) => {
    const img = e.currentTarget.querySelector('img');
    if (img) img.style.transform = scale;
  };

  // Scroll to top on page change
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
          onMouseEnter={(e) => handleHover(e, 'scale(1.05)')}
          onMouseLeave={(e) => handleHover(e, 'scale(1.0)')}
          onClick={() => navigate('/')}
        >
          <img src={logo} alt="Logo" style={styles.logo} />
        </button>
      </div>

      {/* Navigation */}
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
    </header>
  );
};

export default Header;