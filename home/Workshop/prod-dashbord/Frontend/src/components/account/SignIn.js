import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { SocialIcon } from 'react-social-icons';
import styles from './SignUp.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = ({ toggleSignUp, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      // Replace with your actual login endpoint
      const response = await axios.post('/api/login', formData);
      console.log('Login successful:', response.data);
      // Optionally store token or redirect user here
    } catch (error) {
      const message =
        error.response?.data?.message || 'Login failed. Please try again.';
      setServerError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = (provider) => {
    console.log(`Sign in with ${provider}`);
    // Add your social login logic here
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
      <h1 className="text-center mb-4">Sign In</h1>

      <form
        onSubmit={handleSubmit}
        className={`auth-form ${styles.authForm} p-4 border rounded shadow`}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className={`form-control ${styles.input}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            disabled={isLoading}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
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
            placeholder="Enter your password"
            required
            disabled={isLoading}
          />
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </div>

        {serverError && (
          <div className="alert alert-danger text-center">{serverError}</div>
        )}

        <button
          type="submit"
          className={`btn btn-primary w-100 ${styles.submitButton}`}
          disabled={isLoading}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      <p className="text-center mt-3">Or sign in with:</p>
      <div className="d-flex justify-content-center mb-3">
        <SocialIcon network="twitter" className="me-2" onClick={() => handleSocialSignIn('X')} />
        <SocialIcon network="github" className="me-2" onClick={() => handleSocialSignIn('GitHub')} />
        <SocialIcon network="linkedin" className="me-2" onClick={() => handleSocialSignIn('LinkedIn')} />
        <SocialIcon network="google" onClick={() => handleSocialSignIn('Gmail')} />
      </div>

      <p className="text-center mt-3">
        Don&apos;t have an account?{' '}
        <button className={`btn btn-link ${styles.btnLink}`} onClick={toggleSignUp}>
          Sign up here
        </button>
      </p>
    </div>
  );
};

SignIn.propTypes = {
  toggleSignUp: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SignIn;