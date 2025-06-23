import React from 'react';
import PropTypes from 'prop-types';
import './Products.css'; 

const Products = () => {
  return (
    <div className="container">
      <section className="expert-coding">
        <h2 className="text-center">Expert Coding</h2>
        <div className="row">
          <CodingProject
            title="Advanced Algorithms"
            description="Develop highly efficient algorithms to solve complex problems with optimal performance."
            url="#"
          />
          <CodingProject
            title="Machine Learning Models"
            description="Create cutting-edge machine learning models to drive intelligent solutions across various industries."
            url="#"
          />
          <CodingProject
            title="Blockchain Technology"
            description="Implement secure and transparent blockchain solutions for decentralized applications."
            url="#"
          />
        </div>
      </section>

      <section className="text-center my-5">
        <h3>Join Us on Our Journey!</h3>
        <p>
          At AtonixCorp, we believe that innovation is driven by passionate
          individuals. Explore career opportunities with us.
        </p>
        <button className="btn btn-primary">
          Contact Us
        </button>
      </section>

      <section>
        <h2 className="text-center">Our Services</h2>
        <div className="row">
          <ServiceCard
            icon="analytics.png"
            title="Data Analytics"
            description="Unlock the true potential of your data with our advanced analytics solutions. We provide organizations with actionable insights that facilitate informed decision-making, optimize operations, and enhance user experiences."
            url="#"
          />
          <ServiceCard
            icon="iot.png"
            title="IoT Solutions"
            description="Embrace the future with our Internet of Things (IoT) solutions. We develop smart, interconnected ecosystems that promote seamless data exchange and actionable insights."
            url="#"
          />
          <ServiceCard
            icon="agriculture.png"
            title="Agriculture Technology"
            description="Innovative technology solutions to enhance agricultural productivity and sustainability."
            url="#"
          />
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description, url }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 service-card">
        <div className="card-body text-center">
          <img src={icon} alt={`${title} icon`} className="service-icon mb-3" />
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
  );
};

const CodingProject = ({ title, description, url }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 coding-project">
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

CodingProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Products;