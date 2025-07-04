import React, { useState } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './ContactUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phoneNumber: '',
    service: '',
    note: '',
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({ ...prev, phoneNumber: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('/api/contact', formData);
      console.log('Contact form submitted:', response.data);
      setStatus({ loading: false, success: 'Message sent successfully!', error: null });
      setFormData({
        name: '',
        email: '',
        country: '',
        phoneNumber: '',
        service: '',
        note: '',
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: null,
        error: error.response?.data?.message || 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <section className="contact-us text-center my-5">
      <h3>Contact Us</h3>
      <p>
        We&apos;d love to hear from you! Whether you have a question about
        features, trials, pricing, need a demo, or anything else, our team is
        ready to answer all your questions.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group phone-group">
          <PhoneInput
            country={'us'}
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            inputProps={{
              name: 'phoneNumber',
              required: true,
              autoFocus: false,
            }}
            containerClass="form-control"
          />
        </div>
        <div className="form-group">
          <select
            className="form-control"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="service1">Data Service</option>
            <option value="service2">App Development</option>
            <option value="service3">Security Experts</option>
          </select>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Short Note"
            rows="4"
            name="note"
            value={formData.note}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn" disabled={status.loading}>
          {status.loading ? 'Sending...' : 'Submit'}
        </button>
      </form>

      {status.success && <p className="text-success mt-3">{status.success}</p>}
      {status.error && <p className="text-danger mt-3">{status.error}</p>}
    </section>
  );
};

export default ContactUs;