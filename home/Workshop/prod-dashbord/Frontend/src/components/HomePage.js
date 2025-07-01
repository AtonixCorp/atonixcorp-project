import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
  return (
    <Container fluid className="homepage">
      <Row>
        <Col md={10} className="left-column mx-auto">
          <div className="content">
            <header className="page-header">
              <h1>AtonixCorp</h1>
              <p>
                At AtonixCorp, we don&apos;t just build technology—we shape transformative ideas into bold, real-world systems. From scalable cloud infrastructure to socially impactful innovation, our focus is building a future where Africa leads in tech and collaboration.
              </p>
            </header>

            <section id="overview">
              <h2>What Drives Us</h2>
              <p>
                We are committed to harnessing open technologies and scientific thinking to unlock potential. With expertise spanning sectors—from agricultural sustainability to quantum medical modeling—we engineer resilient systems designed to scale and empower.
              </p>
            </section>

            <section id="projects">
              <h2>Flagship Projects</h2>
              <div className="styled-table">
                <table>
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Goal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Therapeutic</td>
                      <td>Personalized care through AI & quantum-enhanced health diagnostics.</td>
                    </tr>
                    <tr>
                      <td>Agrotone</td>
                      <td>Precision farming with real-time IoT and data-driven yield forecasting.</td>
                    </tr>
                    <tr>
                      <td>Hydrpetro</td>
                      <td>Building smart, risk-aware tech for oil & energy workflows.</td>
                    </tr>
                    <tr>
                      <td>Future Networks</td>
                      <td>Next-gen internet infrastructure that’s resilient, scalable, and edge-aware.</td>
                    </tr>
                    <tr>
                      <td>SmartTech Integration</td>
                      <td>Modular systems for seamless integration of tech in civic and industrial spaces.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="capabilities">
              <h2>Our Core Capabilities</h2>
              <div className="styled-table">
                <table>
                  <thead>
                    <tr>
                      <th>Focus</th>
                      <th>How We Deliver</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AgriTech</td>
                      <td>Remote sensing, automation, and predictive analytics in farming systems.</td>
                    </tr>
                    <tr>
                      <td>FinTech</td>
                      <td>Secure digital finance infrastructure with layered authentication and transparency.</td>
                    </tr>
                    <tr>
                      <td>HealthTech</td>
                      <td>Data pipelines, wearables, and AI-enhanced diagnostics for better medical access.</td>
                    </tr>
                    <tr>
                      <td>Big Data & AI</td>
                      <td>From raw insights to actionable intelligence—clean, model, and learn.</td>
                    </tr>
                    <tr>
                      <td>Cloud Infrastructure</td>
                      <td>Decentralized, API-driven architectures for growth-ready platforms.</td>
                    </tr>
                    <tr>
                      <td>Developer Enablement</td>
                      <td>Toolkits and training for ethical open-source engineering and DevOps culture.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="teams">
              <h2>Meet Our Teams</h2>
              <div className="styled-table">
                <table>
                  <thead>
                    <tr>
                      <th>Team</th>
                      <th>Mission</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pioneers</td>
                      <td>Experimentation unit piloting our most bold and emerging ideas.</td>
                    </tr>
                    <tr>
                      <td>Unity Developers</td>
                      <td>Distributed engineering team focused on collaboration and mentoring innovation across the continent.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;