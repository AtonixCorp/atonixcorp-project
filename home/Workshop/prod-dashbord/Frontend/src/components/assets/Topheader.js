import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import LoginWelcomeCard from '../Cards/LoginWelcomeCard';

const styles = {
  header: {
    backgroundColor: '#212529',
    color: 'white',
    fontSize: '0.875rem',
    padding: '8px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
  },
  iconLink: {
    color: 'white',
    marginRight: '12px',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  middleIcons: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  icon: {
    cursor: 'pointer',
    fontSize: '1rem',
    color: 'white',
  },
  searchBar: {
    padding: '4px 8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    background: 'white',
    color: '#212529',
  },
  translator: {
    padding: '4px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    background: 'white',
    color: '#212529',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.875rem',
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px',
  },
};

const TopHeader = () => {
  const [showLoginCard, setShowLoginCard] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <div style={styles.header}>
      <div style={styles.container}>
        {/* Social Icons */}
        <nav aria-label="AtonixCorp social links" style={{ display: 'flex', alignItems: 'center' }}>
          <a
            href="https://www.linkedin.com/company/atonixcorp/"
            style={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/atonixcorp"
            style={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://x.com/atonixcorp"
            style={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://gitlab.com/atonixcorp"
            style={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitLab"
          >
            <FontAwesomeIcon icon={faGitlab} />
          </a>
        </nav>

        {/* Center Icons */}
        <div style={styles.middleIcons}>
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

        {/* Action Button */}
        <div style={styles.buttonGroup}>
          <button style={styles.button} onClick={() => setShowLoginCard(true)}>
            Log In To Hub
          </button>
        </div>

        {/* Modal Component */}
        {showLoginCard && (
          <LoginWelcomeCard show={showLoginCard} handleClose={() => setShowLoginCard(false)} />
        )}
      </div>
    </div>
  );
};

export default TopHeader;