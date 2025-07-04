import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import NavItem from './NavItem';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get('/api/user')
      .then(response => setUser(response.data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="dashboard">
      <ul className="nav flex-column">
        <NavItem title="Customers" iconHref="#people-circle" />
        {/* Add more NavItem components here if needed */}
      </ul>

      <div className="dropdown border-top">
        <a
          href="#"
          className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={user?.avatar || 'https://github.com/mdo.png'}
            alt="User Avatar"
            width="24"
            height="24"
            className="rounded-circle"
          />
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              {user?.name ? `Logged in as ${user.name}` : 'Profile'}
            </a>
          </li>
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>

      {error && <p className="text-danger text-center mt-3">Error: {error}</p>}
    </div>
  );
};

export default Dashboard;