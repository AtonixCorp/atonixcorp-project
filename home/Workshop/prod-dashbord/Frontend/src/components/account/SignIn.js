import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { SocialIcon } from 'react-social-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = ({ toggleSignUp, onClose }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
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
      const response = await axios.post('/api/login', formData);
      console.log('Login successful:', response.data);
      // Handle success logic
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed. Please try again.';
      setServerError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = (provider) => {
    console.log(`Sign in with ${provider}`);
    // Social login logic here
  };

  return (
    <div className="container mt-5" style={{
      maxWidth: '500px',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>

      <h1 className="text-center mb-4">Sign In</h1>

      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow-sm"
        style={{ backgroundColor: '#f9f9f9' }}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            disabled={isLoading}
            style={{ borderRadius: '5px', padding: '10px' }}
          />
          {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            disabled={isLoading}
            style={{ borderRadius: '5px', padding: '10px' }}
          />
          {errors.password && <div className="text-danger mt-1">{errors.password}</div>}
        </div>

        {serverError && (
          <div className="alert alert-danger text-center">{serverError}</div>
        )}

        <button
          type="submit"
          className="btn w-100 text-white"
          disabled={isLoading}
          style={{
            backgroundColor: '#0d9494',
            fontSize: '18px',
            padding: '10px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease'
          }}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      <p className="text-center mt-3">Or sign in with:</p>
      <div className="d-flex justify-content-center gap-2 mb-3">
        <SocialIcon network="twitter" style={{ width: 40, height: 40 }} onClick={() => handleSocialSignIn('X')} />
        <SocialIcon network="github" style={{ width: 40, height: 40 }} onClick={() => handleSocialSignIn('GitHub')} />
        <SocialIcon network="linkedin" style={{ width: 40, height: 40 }} onClick={() => handleSocialSignIn('LinkedIn')} />
        <SocialIcon network="google" style={{ width: 40, height: 40 }} onClick={() => handleSocialSignIn('Gmail')} />
      </div>

      <p className="text-center">
        Don&apos;t have an account?{' '}
        <button className="btn btn-link text-decoration-none" style={{ color: '#0d9494' }} onClick={toggleSignUp}>
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