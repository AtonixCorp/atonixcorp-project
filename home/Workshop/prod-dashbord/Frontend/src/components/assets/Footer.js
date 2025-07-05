import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <footer
  className="text-white pt-4 pb-3 border-top border-secondary"
  style={{ backgroundColor: '#003153' }}

>
      <div className="container px-4">
        <div className="row row-cols-1 row-cols-md-6 g-4">

          <div className="col">
  <h5 className="text-uppercase fw-bold text-white">AtonixCorp</h5>
  <p className="small mb-0 text-white">
    Building intelligent infrastructure for the future. We specialize in scalable systems, secure platforms, and seamless integration.
  </p>
</div>

          {/* Navigation */}
          <div className="col">
            <h6 className="text-uppercase fw-semibold">Navigation</h6>
            <ul className="list-unstyled small">
              <li><Link to="/about-us" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
              <li><Link to="/solutions" className="text-white text-decoration-none">Solutions</Link></li>
              <li><Link to="/faqs" className="text-white text-decoration-none">FAQs</Link></li>
              <li><Link to="/contact-us" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="col">
            <h6 className="text-uppercase fw-semibold">Industries</h6>
            <ul className="list-unstyled small">
              {[
                { name: "NVIDIA", url: "https://www.nvidia.com" },
                { name: "TSMC", url: "https://www.tsmc.com" },
                { name: "Intel", url: "https://www.intel.com" },
                { name: "Samsung", url: "https://www.samsung.com" },
                { name: "Broadcom", url: "https://www.broadcom.com" }
              ].map((item, i) => (
                <li key={i}><a href={item.url} target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">{item.name}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col">
            <h6 className="text-uppercase fw-semibold">Resources</h6>
            <ul className="list-unstyled small">
              {[
                { name: "TechCrunch", url: "https://techcrunch.com" },
                { name: "Wired", url: "https://www.wired.com" },
                { name: "The Verge", url: "https://www.theverge.com" },
                { name: "Ars Technica", url: "https://arstechnica.com" },
                { name: "MIT Tech Review", url: "https://www.technologyreview.com" }
              ].map((item, i) => (
                <li key={i}><a href={item.url} target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">{item.name}</a></li>
              ))}
            </ul>
          </div>

          {/* Space & Defense */}
          <div className="col">
            <h6 className="text-uppercase fw-semibold">Space & Defense</h6>
            <ul className="list-unstyled small">
              {[
                { name: "SpaceX", url: "https://www.spacex.com" },
                { name: "Blue Origin", url: "https://www.blueorigin.com" },
                { name: "Rocket Lab", url: "https://www.rocketlabusa.com" },
                { name: "Lockheed Martin", url: "https://www.lockheedmartin.com" },
                { name: "Northrop Grumman", url: "https://www.northropgrumman.com" }
              ].map((item, i) => (
                <li key={i}><a href={item.url} target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">{item.name}</a></li>
              ))}
            </ul>
          </div>

          {/* Big Data & Research */}
          <div className="col">
            <h6 className="text-uppercase fw-semibold">Big Data & Research</h6>
            <ul className="list-unstyled small">
              {[
                { name: "Databricks", url: "https://www.databricks.com" },
                { name: "Palantir", url: "https://www.palantir.com" },
                { name: "Boston Dynamics", url: "https://www.bostondynamics.com" },
                { name: "DeepMind", url: "https://www.deepmind.com" },
                { name: "OpenAI", url: "https://www.openai.com" }
              ].map((item, i) => (
                <li key={i}><a href={item.url} target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">{item.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;