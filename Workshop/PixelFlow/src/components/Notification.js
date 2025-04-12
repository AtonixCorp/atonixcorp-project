import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Notification.css';
import { Link } from 'react-router-dom';

const Notification = () => {
  return (
    <header className="notification-header">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <Link to="/" className="notification-link">
          Home
        </Link>
        <span className="coming-soon">Coming Soon</span>
        <Link to="/dev-center" className="notification-link">
           Dev Center
        </Link>
      </div>
    </header>
  );
};

export default Notification;
