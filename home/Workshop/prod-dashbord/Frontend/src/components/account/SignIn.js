import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  modalBody: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  input: {
    borderRadius: '6px',
    padding: '10px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
    backgroundColor: '#0d9494',
    color: '#fff',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#0d9494',
    textDecoration: 'underline',
    fontWeight: '600',
    cursor: 'pointer',
  }
};

const SignIn = ({ show, onClose, toggleSignUp }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (show) {
      window.scrollTo(0, 0);
    }
  }, [show]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setServerError('');
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await axios.post('/api/login', formData);
      console.log('Login success:', response.data);
      // TODO: handle redirect or token storage
      onClose();
    } catch (error) {
      const msg = error.response?.data?.message || 'Login failed. Please try again.';
      setServerError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = (provider) => {
    console.log(`Sign in with ${provider}`);
    // TODO: social auth logic
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign In to AtonixCorp</Modal.Title>
      </Modal.Header>

      <Modal.Body style={styles.modalBody}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 text-start">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              disabled={isLoading}
              placeholder="you@example.com"
            />
            {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
          </Form.Group>

          <Form.Group className="mb-3 text-start">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              disabled={isLoading}
              placeholder="********"
            />
            {errors.password && <div className="text-danger mt-1">{errors.password}</div>}
          </Form.Group>

          {serverError && (
            <div className="alert alert-danger text-center">{serverError}</div>
          )}

          <Button type="submit" style={styles.button} disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>
        </Form>

        <div className="mt-4">
          <p className="mb-2">Or sign in with:</p>
          <div style={styles.socialIcons}>
            <SocialIcon network="github" onClick={() => handleSocialSignIn('GitHub')} style={{ width: 40, height: 40 }} />
            <SocialIcon network="linkedin" onClick={() => handleSocialSignIn('LinkedIn')} style={{ width: 40, height: 40 }} />
            <SocialIcon network="google" onClick={() => handleSocialSignIn('Google')} style={{ width: 40, height: 40 }} />
            <SocialIcon network="twitter" onClick={() => handleSocialSignIn('Twitter')} style={{ width: 40, height: 40 }} />
          </div>

          <p className="mt-3">
            {"Don't have an account? "}
            <button onClick={toggleSignUp} style={styles.linkButton}>
              Sign up here
            </button>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

SignIn.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  toggleSignUp: PropTypes.func.isRequired,
};

export default SignIn;