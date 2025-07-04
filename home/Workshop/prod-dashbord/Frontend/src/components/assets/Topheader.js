import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faGitlab
} from '@fortawesome/free-brands-svg-icons';

const TopHeader = () => {
  return (
    <div className="top-header bg-dark text-white py-2 small">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        {/* Social Icons */}
        <div className="d-flex align-items-center">
          <a
            href="https://www.linkedin.com/company/atonixcorp/"
            className="text-white me-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/atonixcorp"
            className="text-white me-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://x.com/atonixcorp"
            className="text-white me-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://gitlab.com/atonixcorp"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitLab"
          >
            <FontAwesomeIcon icon={faGitlab} />
          </a>
        </div>

        {/* Utility Links */}
        <div className="d-flex align-items-center">
          <Link to="/about-us" className="nav-link text-white px-2">
            About
          </Link>
          <Link to="/contactus" className="nav-link text-white px-2">
            Contact
          </Link>
          <Link to="/signup" className="nav-link text-white px-2">
            Sign Up
          </Link>
          <Link to="/signin" className="nav-link text-white px-2">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;