// components/DropdownMenu.js
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const DropdownMenu = ({ label, options, isOpen, onToggle, navigate }) => (
  <div 
    className="nav-item"
    role="button"
    tabIndex={0}
    onClick={onToggle}
    onKeyDown={(e) => e.key === 'Enter' && onToggle()}
    aria-expanded={isOpen}
    aria-haspopup="true"
  >
    {label} <FontAwesomeIcon icon={faCaretDown} />
    {isOpen && (
      <div className="dropdown">
        {options.map(({ name, path }) => (
          <span
            key={name}
            role="button"
            tabIndex={0}
            onClick={() => navigate(path)}
            onKeyDown={(e) => e.key === 'Enter' && navigate(path)}
          >
            {name}
          </span>
        ))}
      </div>
    )}
  </div>
);

DropdownMenu.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DropdownMenu;