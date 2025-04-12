import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SignUp from '../account/SignUp';
import SignIn from '../account/SignIn';
import logo from '../images/logo512.png';

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-xxl navbar-dark navbar-custom text-white p-1 border border-primary-subtle rounded-3 w-100 fixed-top"
      aria-label="Seventh navbar example"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="AtonixCorp Logo" className="navbar-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExampleXxl"
          aria-controls="navbarsExampleXxl"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleXxl">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="https://community.atonixcorp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Community
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/research">
                Research
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/register">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About Us
              </Link>
            </li>
          </ul>
          <form role="search" className="d-flex me-3">
            <input
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>

          <button
            type="button"
            className="btn btn-primary me-2"
            data-bs-toggle="modal"
            data-bs-target="#signUpModal"
          >
            Sign Up
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#signInModal"
          >
            Sign In
          </button>

          <div
            className="modal fade"
            id="signUpModal"
            tabIndex="-1"
            aria-labelledby="signUpModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="signUpModalLabel">
                    Sign Up
                  </h5>
                </div>
                <div className="modal-body">
                  <SignUp />
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="signInModal"
            tabIndex="-1"
            aria-labelledby="signInModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="signInModalLabel">
                    Sign In
                  </h5>
                </div>
                <div className="modal-body">
                  <SignIn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;