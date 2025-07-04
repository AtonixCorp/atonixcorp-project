import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import LoginWelcomeCard from '../Cards/LoginWelcomeCard';
import DropdownMenu from './DropdownMenu';

const dropdownData = {
  developments: [
    { name: 'Project 1', path: '/developments/project1' },
    { name: 'Project 2', path: '/developments/project2' },
  ],
  community: [
    { name: 'Event 1', path: '/community/event1' },
    { name: 'Event 2', path: '/community/event2' },
  ],
  products: [
    { name: 'Product 1', path: '/products/product1' },
    { name: 'Product 2', path: '/products/product2' },
  ],
  support: [
    { name: 'FAQ', path: '/support/faq' },
    { name: 'Contact', path: '/support/contact' },
  ],
  company: [
    { name: 'About Us', path: '/company/about' },
    { name: 'Careers', path: '/company/careers' },
  ],
};

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showLoginCard, setShowLoginCard] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="Logo" className="logo" />
        <span className="logo-text">ATONIXCORP</span>
      </div>

      <nav className="nav">
        {Object.entries(dropdownData).map(([key, options]) => (
          <DropdownMenu
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            options={options}
            isOpen={activeDropdown === key}
            onToggle={() => handleDropdownToggle(key)}
            navigate={navigate}
          />
        ))}
      </nav>

      <div className="icon-container">
        <FontAwesomeIcon icon={faSearch} className="icon" onClick={() => {
          setShowSearch(!showSearch);
          setShowLanguage(false);
        }} />
        {showSearch && <input type="text" className="search-bar" placeholder="Search..." />}

        <FontAwesomeIcon icon={faGlobe} className="icon" onClick={() => {
          setShowLanguage(!showLanguage);
          setShowSearch(false);
        }} />
        {showLanguage && (
          <select className="translator">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        )}
      </div>

      <button className="cta-button" onClick={() => setShowLoginCard(true)}>
        <span className="cta-text">Log In To Hub</span>
      </button>

      {showLoginCard && <LoginWelcomeCard show={showLoginCard} handleClose={() => setShowLoginCard(false)} />}
    </header>
  );
};

export default Header;