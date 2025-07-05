import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Herosection = () => {
  return (
    <header
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: '#ffffff',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        borderRadius: '20px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        margin: '2rem',
      }}
    >
      <div className="container text-center">
        <div
          className="px-3 mx-auto"
          style={{
            maxWidth: '800px',
            color: '#000000',
          }}
        >
          <h1
            className="mb-3"
            style={{
              fontSize: '3.5rem', // 🔥 bigger text
              fontWeight: 800,
              textShadow: '0 0 10px rgba(13, 110, 253, 0.3)', // 💡 glowing edge
            }}
          >
            Build the Future with{' '}
            <span style={{ color: 'linear-gradient(135deg, #ff69b4, #1e90ff)',  }}>
              AtonixCorp
            </span>
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.7',
              color: '#212529',
            }}
            className="mb-4"
          >
            Join our Developer Preview Program and help shape the next generation of AtonixCorp products.
            Your insights will drive what comes next.
          </p>
          <a
            href="https://developer.atonix.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg fw-semibold px-4 py-2"
            style={{
              boxShadow: '0 0 12px rgba(13, 110, 253, 0.4)', // ✨ glowing button
            }}
          >
            Join the Preview Program
          </a>
        </div>
      </div>
    </header>
  );
};

export default Herosection;