import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer
  className="text-white pt-4 pb-3 border-top border-secondary"
  style={{ backgroundColor: '#003153' }}
>
      <div className="container">
        {/* Newsletter + Social Row */}
        <div className="row align-items-center">
          <div className="col-md-6 mb-3">
            <h6 className="text-uppercase fw-bold">Subscribe to our newsletter</h6>
            <form className="d-flex mt-2">
              <input
                id="newsletter1"
                type="email"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary ms-2" type="button">
                Subscribe
              </button>
            </form>
          </div>
          <div className="col-md-6 mb-3">
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end mb-0">
              <li className="ms-3">
                <a
                  href="https://www.linkedin.com/company/AtonixCorp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://github.com/atonixcorp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-white"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://x.com/atonixcorp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-white"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://gitlab.com/atonixcorp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitLab"
                  className="text-white"
                >
                  <FontAwesomeIcon icon={faGitlab} size="lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Row */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mt-4 border-top pt-3 text-white small">
  <p className="mb-2 mb-sm-0">
    &copy; {new Date().getFullYear()} AtonixCorp Org. All rights reserved.
  </p>


          <div>
            <Link to="/privacy" className="text-secondary text-decoration-none me-3">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-secondary text-decoration-none me-3">
              Terms and Conditions
            </Link>
            <Link to="/cookies" className="text-secondary text-decoration-none">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}