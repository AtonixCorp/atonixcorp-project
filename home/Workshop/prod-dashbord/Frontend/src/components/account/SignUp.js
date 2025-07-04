import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { SocialIcon } from 'react-social-icons';
import styles from './SignUp.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = ({ toggleSignIn, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    phoneNumber: '',
    termsAccepted: false,
  });

  useEffect(() => {
    console.log('SignUp component mounted');
    return () => console.log('SignUp component unmounted');
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phoneNumber: value,
    }));
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
    // You can add logic to trigger OAuth flows here
  };

  return (
    <div className={`container ${styles.container} mt-5`}>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className={`btn-close ${styles.btnClose}`}
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>

      <h1 className="text-center mb-4">Sign Up</h1>
      <p className="text-center mb-4">Join us today and start exploring!</p>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className={`auth-form ${styles.authForm} p-4 border rounded shadow`}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
              type="text"
              className={`form-control ${styles.input}`}
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
              disabled={isLoading}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className={`form-control ${styles.input}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              disabled={isLoading}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              className={`form-control ${styles.input}`}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              disabled={isLoading}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
            <input
              type="password"
              className={`form-control ${styles.input}`}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
              disabled={isLoading}
            />
            {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
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
                autoFocus: false,
                disabled: isLoading,
              }}
              containerClass={`form-control ${styles.input}`}
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
            <label className="form-check-label" htmlFor="termsAccepted">
              I accept the terms and conditions
            </label>
            {errors.termsAccepted && <div className="text-danger">{errors.termsAccepted}</div>}
          </div>

          <button type="submit" className={`btn btn-primary w-100 ${styles.submitButton}`} disabled={isLoading}>
            {isLoading ? 'Signing Up…' : 'Sign Up'}
          </button>
        </form>
      ) : (
        <p className="text-center mt-3">Thank you for signing up!</p>
      )}

      <p className="text-center mt-3">Or sign up with:</p>
      <div className={`d-flex justify-content-center mb-3 ${styles.socialIcons}`}>
        <SocialIcon network="twitter" className={styles.socialIcon} onClick={() => handleSocialSignUp('Twitter')} />
        <SocialIcon network="github" className={styles.socialIcon} onClick={() => handleSocialSignUp('GitHub')} />
        <SocialIcon network="linkedin" className={styles.socialIcon} onClick={() => handleSocialSignUp('LinkedIn')} />
        <SocialIcon network="google" className={styles.socialIcon} onClick={() => handleSocialSignUp('Google')} />
      </div>

      <p className="text-center mt-3">
        Already have an account?{' '}
        <button className={`btn btn-link ${styles.btnLink}`} onClick={toggleSignIn}>
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

export default SignUp;