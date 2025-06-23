import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';
import { FaGitlab, FaGithub, FaLinkedin, FaSlack, FaDiscord } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './LoginWelcomeCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const LoginWelcomeCard = ({ show, handleClose }) => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
    handleClose();
  };

  const handleSignUpClick = () => {
    navigate('/signup');
    handleClose();
  };

  const handleContactClick = () => {
    navigate('/contact');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Welcome To AtonixCorp Hub</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Button variant="primary" className="mb-2" block onClick={handleSignInClick}>
            Sign In
          </Button>
          <Button variant="secondary" className="mb-2" block onClick={handleSignUpClick}>
            Sign Up
          </Button>
          <Button variant="info" className="mb-2" block onClick={handleContactClick}>
            Contact
          </Button>
        </Form>
        <div className="social-media-icons">
          <a href="https://www.linkedin.com/in/atonixcorp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/atonixcorp" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={30} />
          </a>
          <a href="https://gitlab.com/guxegdsa" target="_blank" rel="noopener noreferrer" aria-label="GitLab">
            <FaGitlab size={30} />
          </a>
          <a href="https://slack.com/atonixcorp" target="_blank" rel="noopener noreferrer" aria-label="Slack">
            <FaSlack size={30} />
          </a>
          <a href="https://discord.com/invite/AtonixCorp" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <FaDiscord size={30} />
          </a>
        </div>
      </Modal.Body>
    </Modal>
  );
};

LoginWelcomeCard.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default LoginWelcomeCard;