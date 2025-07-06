import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  },
  paragraph: {
    marginBottom: '20px',
    textAlign: 'center',
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
    width: '100%',
    padding: '10px 15px',
    backgroundColor: '#0d9494',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  successText: {
    color: 'green',
    marginTop: '15px',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: '15px',
    textAlign: 'center',
  },
};

const ContactUs = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    // ✅ Replaces the current route to close modal
    navigate('/', { replace: true });
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    service: '',
    note: '',
  });

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      await axios.post('/api/contact', formData);
      setStatus({ loading: false, success: 'Message sent successfully!', error: null });
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        service: '',
        note: '',
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: null,
        error:
          error.response?.data?.message || 'Something went wrong. Please try again.',
      });
    }
  };

  return (
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
  );
};

export default ContactUs;