import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dropdown = ({ visibleSection, toggleVisibility }) => {
  const topics = [
    {
      title: 'Quantum Computing',
      content:
        'Dive into the mind-bending world of qubits, superposition, and quantum algorithms. Explore how quantum computers are reshaping the future of computation.',
    },
    {
      title: 'Artificial Intelligence',
      content:
        '🤖 From neural networks to computer vision, we cover it all. Learn how AI is transforming industries and shaping our future.',
    },
    {
      title: 'Hardware Computing',
      content:
        '🔌 From CPUs to GPUs, from Arduino to Raspberry Pi, we unravel the mysteries of hardware. Get hands-on tips, reviews, and DIY projects.',
    },
    {
      title: 'Data Science',
      content:
        '📊 Unleash the power of data! Learn about machine learning, data visualization, and predictive analytics. Discover the stories hidden in the numbers.',
    },
    {
      title: 'Web Development',
      content:
        '🌐 HTML, CSS, JavaScript, and beyond. Whether you’re a front-end wizard or a back-end maestro, we’ve got resources to level up your web game.',
    },
    {
      title: 'Cybersecurity',
      content:
        '🔐 Lock down your digital fortress. Explore encryption, ethical hacking, and best practices to keep your data safe.',
    },
  ];

  return (
    <div className="container">
      {topics.map((topic, index) => (
        <section
          key={index}
          className="topic-item mb-3 p-3 border rounded"
          onClick={() => toggleVisibility(`topic${index}`)}
        >
          <h3 className="topic-title">
            <small>{topic.title}</small>
          </h3>
          {visibleSection === `topic${index}` && (
            <p className="topic-content small">{topic.content}</p>
          )}
        </section>
      ))}
    </div>
  );
};

Dropdown.propTypes = {
  visibleSection: PropTypes.string,
  toggleVisibility: PropTypes.func.isRequired,
};

export default Dropdown;
