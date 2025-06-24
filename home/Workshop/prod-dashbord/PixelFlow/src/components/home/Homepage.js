import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleVisibility = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

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
    <main className="main-home-grid">
      <div className="container">
        <section className="topics-section bg-white rounded mb-4 shadow-sm">
          <h2 className="mb-4" onClick={() => toggleVisibility('cuttingEdge')}>
            Explore Cutting-Edge Topics
            <span
              className={`arrow ${visibleSection === 'cuttingEdge' ? 'up' : 'down'}`}
            ></span>
          </h2>
          {visibleSection === 'cuttingEdge' && (
            <>{/* Your Cutting-Edge Topics Content */}</>
          )}
        </section>

        {topics.slice(0, 3).map((topic, index) => (
          <section
            key={index}
            className="topics-section bg-white rounded mb-4 shadow-sm"
          >
            <h2 className="mb-4" onClick={() => toggleVisibility(topic.title)}>
              {topic.title}
              <span
                className={`arrow ${visibleSection === topic.title ? 'up' : 'down'}`}
              ></span>
            </h2>
            {visibleSection === topic.title && (
              <p>
                <strong>{topic.content}</strong>
              </p>
            )}
          </section>
        ))}

        <section className="sidebar p-5 rounded mb-4 shadow-sm">
          <h1>AtonixCorp</h1>
          <p>
            <strong>
              This is the sidebar content. You can place navigation links, ads,
              or any other supplementary information here.
            </strong>
          </p>
        </section>
      </div>

      <div className="container">
        <section className="community-section bg-light rounded mb-4">
          <h2 className="mb-4" onClick={() => toggleVisibility('community')}>
            Connect with Like-Minded Techies
            <span
              className={`arrow ${visibleSection === 'community' ? 'up' : 'down'}`}
            ></span>
          </h2>
          {visibleSection === 'community' && (
            <>
              <p>
                👥 <strong>Community Forums:</strong> Engage in lively
                discussions, ask questions, and share your insights. Our
                community of tech enthusiasts is here to support you.
              </p>
              <p>
                📚 <strong>Tutorials and Guides:</strong> Step-by-step
                tutorials, code snippets, and best practices. Learn at your own
                pace and conquer new skills.
              </p>
            </>
          )}
        </section>

        <section className="topics-section bg-white rounded mb-4 shadow-sm">
          <h2 className="mb-4" onClick={() => toggleVisibility('topics')}>
            Explore More Topics
            <span
              className={`arrow ${visibleSection === 'topics' ? 'up' : 'down'}`}
            ></span>
          </h2>
          {visibleSection === 'topics' && (
            <>
              {topics.slice(3).map((topic, index) => (
                <section key={index} className="topics-grid">
                  <h3 className="text-primary">{topic.title}</h3>
                  <p>
                    <strong>{topic.content}</strong>
                  </p>
                </section>
              ))}
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default Home;
