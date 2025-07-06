import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
>>>>>>> refs/remotes/origin/main
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { SocialIcon } from 'react-social-icons';
<<<<<<< HEAD
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const navigate = useNavigate();
=======
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = ({ toggleSignIn, onClose }) => {
>>>>>>> refs/remotes/origin/main
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    termsAccepted: false,
  });

  useEffect(() => {
<<<<<<< HEAD
    window.scrollTo(0, 0);
  }, []);

  const handleClose = () => {
    navigate('/');
  };

=======
    console.log('SignUp component mounted');
    return () => console.log('SignUp component unmounted');
  }, []);

>>>>>>> refs/remotes/origin/main
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phoneNumber: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const response = await axios.post('/api/signup', formData);
      console.log('Signup successful:', response.data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Signup failed:', error.response?.data || error.message);
      alert('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignUp = (provider) => {
    console.log(`Sign up with ${provider}`);
<<<<<<< HEAD
  };

  return (
    <Modal show={true} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">Sign Up</Modal.Title>
      </Modal.Header>

      <div
        className="container"
        style={{
          maxWidth: '500px',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        <p className="text-center mb-3">Join us today and start exploring!</p>

        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="p-3 border rounded shadow-sm"
            style={{ backgroundColor: '#f9f9f9' }}
          >
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                disabled={isLoading}
              />
              {errors.confirmPassword && (
                <div className="text-danger mt-1">{errors.confirmPassword}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
              <PhoneInput
                country={'us'}
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                inputProps={{
                  name: 'phoneNumber',
                  required: true,
                  disabled: isLoading,
                }}
                inputStyle={{ width: '100%' }}
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              <label htmlFor="termsAccepted" className="form-check-label">
                I accept the terms and conditions
              </label>
              {errors.termsAccepted && (
                <div className="text-danger mt-1">{errors.termsAccepted}</div>
              )}
            </div>

            <button
              type="submit"
              className="btn w-100 text-white"
              disabled={isLoading}
              style={{
                backgroundColor: '#0d9494',
                fontSize: '18px',
                padding: '10px',
                borderRadius: '5px',
              }}
            >
              {isLoading ? 'Signing Up…' : 'Sign Up'}
            </button>
          </form>
        ) : (
          <p className="text-center mt-3">Thank you for signing up!</p>
        )}

        <p className="text-center mt-4">Or sign up with:</p>
        <div className="d-flex justify-content-center gap-3 mb-3">
          <SocialIcon network="twitter" style={{ width: 40, height: 40 }} onClick={() => handleSocialSignUp('Twitter')} />
          <SocialIcon network="github" style={{ width: 40, height: 40 }} onClick={() => handleSocialSignUp('GitHub')} />
          <SocialIcon network="linkedin" style={{ width: 40, height: 40 }} onClick={() => handleSocialSignUp('LinkedIn')} />
          <SocialIcon network="google" style={{ width: 40, height: 40 }} onClick={() => handleSocialSignUp('Google')} />
        </div>

        <p className="text-center">
          Already have an account?{' '}
          <button className="btn btn-link text-decoration-none" style={{ color: '#0d9494' }} onClick={() => navigate('/signin')}>
            Sign in here
          </button>
        </p>
      </div>
    </Modal>
  );
};

=======
    // Trigger OAuth flow here
  };

  return (
    <div
      className="container mt-5"
      style={{
        maxWidth: '500px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      <div className="d-flex justify-content-end">
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
      </div>

      <h1 className="text-center mb-3">Sign Up</h1>
      <p className="text-center mb-4">Join us today and start exploring!</p>

      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="p-4 border rounded shadow-sm"
          style={{ backgroundColor: '#f9f9f9' }}
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
              disabled={isLoading}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              disabled={isLoading}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
              disabled={isLoading}
            />
            {errors.confirmPassword && (
              <div className="text-danger mt-1">{errors.confirmPassword}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number:
            </label>
            <PhoneInput
              country={'us'}
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              inputProps={{
                name: 'phoneNumber',
                required: true,
                disabled: isLoading,
              }}
              inputStyle={{ width: '100%' }}
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="termsAccepted"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <label htmlFor="termsAccepted" className="form-check-label">
              I accept the terms and conditions
            </label>
            {errors.termsAccepted && (
              <div className="text-danger mt-1">{errors.termsAccepted}</div>
            )}
          </div>

          <button
            type="submit"
            className="btn w-100 text-white"
            disabled={isLoading}
            style={{
              backgroundColor: '#0d9494',
              fontSize: '18px',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            {isLoading ? 'Signing Up…' : 'Sign Up'}
          </button>
        </form>
      ) : (
        <p className="text-center mt-3">Thank you for signing up!</p>
      )}

      <p className="text-center mt-4">Or sign up with:</p>
      <div className="d-flex justify-content-center gap-3 mb-3">
        <SocialIcon network="twitter" style={{ width: 40, height: 40 }} onClick={() => handleSocialSignUp('Twitter')} />
        <SocialIcon network="github" style={{ width: 40, height: 40 }} onClick={() => handleSocialSignUp('GitHub')} />
        <SocialIcon network="linkedin" style={{ width: 40, height: 40 }} onClick={() => handleSocialSignUp('LinkedIn')} />
        <SocialIcon network="google" style={{ width: 40, height: 40 }} onClick={() => handleSocialSignUp('Google')} />
      </div>

      <p className="text-center">
        Already have an account?{' '}
        <button className="btn btn-link text-decoration-none" style={{ color: '#0d9494' }} onClick={toggleSignIn}>
          Sign in here
        </button>
      </p>
    </div>
  );
};

SignUp.propTypes = {
  toggleSignIn: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

>>>>>>> refs/remotes/origin/main
export default SignUp;