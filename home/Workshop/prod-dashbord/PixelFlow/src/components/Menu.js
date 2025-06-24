import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const pages = [
    'Data Science',
    'Artificial Intelligence',
    'Machine Learning',
    'IoT Solutions',
    'Quantum Computing',
    'Hardware Computing',
    'Software Development',
    'Cybersecurity',
    'Networking',
    'Cloud Computing',
    'Big Data',
    'DevOps',
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="menu">
      <div 
        className="menu-toggle" 
        onClick={toggleMenu}
        onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
        role="button"
        tabIndex={0}
      >
        {/* Hamburger icon */}
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      </div>
      <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
        {pages.map((page, index) => (
          <li key={index} className="menu-item">
            <a
              href={`#${page.replace(' ', '-').toLowerCase()}`}
              className="menu-link"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;