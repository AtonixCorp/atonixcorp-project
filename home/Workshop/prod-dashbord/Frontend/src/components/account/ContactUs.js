<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
>>>>>>> refs/remotes/origin/main

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
<<<<<<< HEAD
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  },
  paragraph: {
    marginBottom: '20px',
    textAlign: 'center',
=======
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    marginBottom: '15px',
  },
  paragraph: {
    marginBottom: '20px',
>>>>>>> refs/remotes/origin/main
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
<<<<<<< HEAD
=======
  inputFocus: {
    borderColor: '#007bff',
    outline: 'none',
    boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
  },
  phoneGroup: {
    display: 'flex',
  },
>>>>>>> refs/remotes/origin/main
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    boxSizing: 'border-box',
    resize: 'vertical',
  },
  button: {
    display: 'inline-block',
<<<<<<< HEAD
    width: '100%',
    padding: '10px 15px',
    backgroundColor: '#0d9494',
=======
    padding: '10px 15px',
    backgroundColor: '#007bff',
>>>>>>> refs/remotes/origin/main
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
<<<<<<< HEAD
  successText: {
    color: 'green',
    marginTop: '15px',
    textAlign: 'center',
=======
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  successText: {
    color: 'green',
    marginTop: '15px',
>>>>>>> refs/remotes/origin/main
  },
  errorText: {
    color: 'red',
    marginTop: '15px',
<<<<<<< HEAD
    textAlign: 'center',
=======
>>>>>>> refs/remotes/origin/main
  },
};

const ContactUs = () => {
<<<<<<< HEAD
  const navigate = useNavigate();

  const handleClose = () => {
    // ✅ Replaces the current route to close modal
    navigate('/', { replace: true });
  };

=======
>>>>>>> refs/remotes/origin/main
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    service: '',
    note: '',
  });

<<<<<<< HEAD
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phoneNumber: value }));
=======
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({ ...prev, phoneNumber: value }));
>>>>>>> refs/remotes/origin/main
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      await axios.post('/api/contact', formData);
      setStatus({ loading: false, success: 'Message sent successfully!', error: null });
<<<<<<< HEAD
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        service: '',
        note: '',
      });
=======
      setFormData({ name: '', email: '', phoneNumber: '', service: '', note: '' });
>>>>>>> refs/remotes/origin/main
    } catch (error) {
      setStatus({
        loading: false,
        success: null,
<<<<<<< HEAD
        error:
          error.response?.data?.message || 'Something went wrong. Please try again.',
=======
        error: error.response?.data?.message || 'Something went wrong. Please try again.',
>>>>>>> refs/remotes/origin/main
      });
    }
  };

  return (
<<<<<<< HEAD
    <Modal show={true} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">Contact Us</Modal.Title>
      </Modal.Header>

      <div style={styles.container}>
        <p style={styles.paragraph}>
          We&apos;d love to hear from you! Whether you have a question about features,
          trials, pricing, or anything else, our team is ready to help.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <PhoneInput
              country={'us'}
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              inputProps={{
                name: 'phoneNumber',
                required: true,
              }}
              inputStyle={{ width: '100%', ...styles.input }}
            />
          </div>

          <div style={styles.formGroup}>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              style={styles.input}
            >
              <option value="">Select a Service</option>
              <option value="service1">Data Service</option>
              <option value="service2">App Development</option>
              <option value="service3">Security Experts</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <textarea
              placeholder="Short Note"
              rows="4"
              name="note"
              value={formData.note}
              onChange={handleInputChange}
              required
              style={styles.textarea}
            ></textarea>
          </div>

          <button type="submit" style={styles.button} disabled={status.loading}>
            {status.loading ? 'Sending...' : 'Submit'}
          </button>
        </form>

        {status.success && <p style={styles.successText}>{status.success}</p>}
        {status.error && <p style={styles.errorText}>{status.error}</p>}
      </div>
    </Modal>
=======
    <section style={styles.container}>
      <h3 style={styles.heading}>Contact Us</h3>
      <p style={styles.paragraph}>
        We&apos;d love to hear from you! Whether you have a question about features, trials, pricing, or anything else, our team is ready to help.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <PhoneInput
            country={'us'}
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            inputProps={{
              name: 'phoneNumber',
              required: true,
              autoFocus: false,
            }}
            inputStyle={{ ...styles.input }}
          />
        </div>

        <div style={styles.formGroup}>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
            style={styles.input}
          >
            <option value="">Select a Service</option>
            <option value="service1">Data Service</option>
            <option value="service2">App Development</option>
            <option value="service3">Security Experts</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <textarea
            placeholder="Short Note"
            rows="4"
            name="note"
            value={formData.note}
            onChange={handleInputChange}
            required
            style={styles.textarea}
          ></textarea>
        </div>

        <button type="submit" style={styles.button} disabled={status.loading}>
          {status.loading ? 'Sending...' : 'Submit'}
        </button>
      </form>

      {status.success && <p style={styles.successText}>{status.success}</p>}
      {status.error && <p style={styles.errorText}>{status.error}</p>}
    </section>
>>>>>>> refs/remotes/origin/main
  );
};

export default ContactUs;