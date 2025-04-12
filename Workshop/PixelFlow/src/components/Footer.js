import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Footer.css';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer py-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-6 col-md-2 mb-3">
              <h5>Home</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/about-us" className="nav-link p-0">
                    About Us
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/contact-us" className="nav-link p-0">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/community" className="nav-link p-0">
                    Community
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/faqs" className="nav-link p-0">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/services" className="nav-link p-0">
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Company</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/services" className="nav-link p-0">
                    Services
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/solutions" className="nav-link p-0">
                    Solutions
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/about-us" className="nav-link p-0">
                    About Us
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/careers" className="nav-link p-0">
                    Careers
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/contact-us" className="nav-link p-0">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Blog/News</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/nvidia" className="nav-link p-0">
                    Nvidia
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/ubuntu" className="nav-link p-0">
                    Ubuntu
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/hackernews" className="nav-link p-0">
                    Hackernews
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/spacex" className="nav-link p-0">
                    SpaceX
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/nasa" className="nav-link p-0">
                    Nasa
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Contact</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="mailto:support@atonixcorp.atlassian.net"
                    className="nav-link p-0"
                  >
                    Email Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="https://atonixcorp.atlassian.net/servicedesk/customer/portal/3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link p-0"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row align-items-center mt-4 newsletter-social-row">
            <div className="col-md-6 mb-3">
              <h5>Subscribe to our newsletter</h5>
              <form className="d-flex">
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary ms-2" type="button">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="col-md-6 mb-3">
              <ul className="list-unstyled d-flex justify-content-center mb-0 social-icons">
                <li className="ms-3">
                  <a
                    href="https://www.linkedin.com/company/AtonixCorp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="1x"
                      className="fa-icon"
                    />
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    href="https://github.com/atonixcorp"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="1x"
                      className="fa-icon"
                    />
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    href="https://x.com/atonixcorp"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="1x"
                      className="fa-icon"
                    />
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    href="https://gitlab.com/atonixcorp"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitLab"
                  >
                    <FontAwesomeIcon
                      icon={faGitlab}
                      size="1x"
                      className="fa-icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2024 AtonixCorp Organization. All rights reserved.</p>
            <div className="d-flex">
              <Link to="/" className="me-3 text-secondary">
                Privacy Policy
              </Link>
              <Link to="/" className="me-3 text-secondary">
                Terms and Conditions
              </Link>
              <Link to="/" className="text-secondary">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
