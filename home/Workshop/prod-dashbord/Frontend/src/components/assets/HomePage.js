import React from 'react';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container fluid className="bg-light py-5">
      <Row className="justify-content-center text-center mb-5">
        <Col xl={10}>
          <h1 className="display-4 fw-bold">DATA DRIVEN INNOVATION</h1>
          <p className="lead">
            AtonixCorp delivers real-time, AI-powered insights that drive mission-critical decisions across industries—from modern infrastructure and cybersecurity to enterprise intelligence and innovation ecosystems.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
        <Col xl={10}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title as="h2">What Drives Us</Card.Title>
              <Card.Text>
                We are committed to harnessing open technologies and scientific thinking to unlock potential. With expertise spanning sectors—from agricultural sustainability to quantum medical modeling—we engineer resilient systems designed to scale and empower.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title as="h2">Flagship Projects</Card.Title>
              <Table striped bordered responsive>
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
              </Table>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title as="h2">Our Core Capabilities</Card.Title>
              <Table striped bordered responsive>
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
              </Table>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title as="h2">Meet Our Teams</Card.Title>
              <Table striped bordered responsive>
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
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;