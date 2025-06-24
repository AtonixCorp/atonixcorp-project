import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faDiscord, faLinkedin, faSlack } from '@fortawesome/free-brands-svg-icons';
import './HomePage.css';
//import ErrorBoundary from './ErrorBoundary';

const HomePage = () => {
  return (

      <Container fluid>
        <Row>
          <Col className="left-column" md={3}>
            <div className="content">
              <h2>Contents</h2>
              <ul>
                <li><a href="#company-overview">Company Overview</a></li>
                <li>
                  <a href="#projects">Projects</a>
                  <ul>
                    <li><a href="#therapeutic">Therapeutic</a></li>
                    <li><a href="#agrotone">Agrotone</a></li>
                    <li><a href="#hydrpetro">Hydrpetro</a></li>
                    <li><a href="#future-networks">Future Networks</a></li>
                    <li><a href="#smarttech-integration">SmartTech Integration</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#focus-areas">Focus Areas</a>
                  <ul>
                    <li><a href="#agriculture">Agriculture</a></li>
                    <li><a href="#fintech">Fintech</a></li>
                    <li><a href="#medical-research">Medical Research</a></li>
                    <li><a href="#security">Security</a></li>
                    <li><a href="#big-data">Big Data</a></li>
                    <li><a href="#cloud-computing">Cloud Computing</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#teams">Teams</a>
                  <ul>
                    <li><a href="#pioneers">Pioneers</a></li>
                    <li><a href="#unity-developers">Unity Developers</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#resources">Resources</a>
                  <ul>
                    <li><a href="#development-guidelines">Development Guidelines</a></li>
                    <li><a href="#contributing">Contributing</a></li>
                    <li><a href="#support">Support</a></li>
                  </ul>
                </li>
                <li><a href="#community">Community</a></li>
                <li><a href="#contact-information">Contact Information</a></li>
              </ul>
            </div>
          </Col>
          <Col className="middle-column" md={6}>
            <section id="company-overview">
              <h2>Company Overview</h2>
              <p>AtonixCorp is at the forefront of technological innovation, developing solutions that push the boundaries of what&apos;s possible. Our mission is to lead the way in technological evolution, making a significant impact on the world through collaboration, innovation, and continuous learning.</p>
            </section>
            <section id="projects">
              <h2>Projects</h2>
              <table>
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Overview</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Therapeutic</td>
                    <td>Harnessing the power of quantum machine learning to revolutionize personalized medicine. By analyzing complex patient data, including genetic information and medical history, this project strives to provide tailored treatment recommendations that enhance healthcare outcomes. Leveraging IBM’s quantum algorithms in conjunction with CUDA for efficient data processing, it addresses the limitations of traditional methods and sets the stage for transformative advancements in personalized healthcare.</td>
                  </tr>
                  <tr>
                    <td>Agrotone</td>
                    <td>Transforming agricultural practices through IoT and big data. This project focuses on increasing yield, ensuring sustainable farming, and optimizing resource use in agriculture.</td>
                  </tr>
                  <tr>
                    <td>Hydrpetro</td>
                    <td>Developing cutting-edge technology solutions for the oil and gas industry. This project aims to enhance the efficiency and safety of oil extraction and processing through innovative techniques and technologies.</td>
                  </tr>
                  <tr>
                    <td>Future Networks</td>
                    <td>Pioneering next-generation networking solutions to support the demands of tomorrow. Focused on developing scalable and efficient network infrastructures.</td>
                  </tr>
                  <tr>
                    <td>SmartTech Integration</td>
                    <td>Developing intelligent systems that integrate seamlessly with existing technologies to improve efficiency and functionality.</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section id="focus-areas">
              <h2>Focus Areas</h2>
              <table>
                <thead>
                  <tr>
                    <th>Focus Area</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Agriculture</td>
                    <td>Leveraging IoT and big data to transform agricultural practices, increase yield, and ensure sustainable farming.</td>
                  </tr>
                  <tr>
                    <td>Fintech</td>
                    <td>Developing secure and efficient financial technologies to enhance digital transactions and financial services.</td>
                  </tr>
                  <tr>
                    <td>Medical Research</td>
                    <td>Advancing medical research through innovative data analytics and IoT solutions to improve patient outcomes.</td>
                  </tr>
                  <tr>
                    <td>Security</td>
                    <td>Creating robust security solutions to protect sensitive data and ensure privacy in the digital age.</td>
                  </tr>
                  <tr>
                    <td>Big Data</td>
                    <td>Harnessing the power of big data to derive actionable insights and drive strategic decisions.</td>
                  </tr>
                  <tr>
                    <td>Cloud Computing</td>
                    <td>Utilizing cloud technologies to provide scalable, flexible, and cost-effective computing resources.</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section id="teams">
              <h2>Teams</h2>
              <table>
                <thead>
                  <tr>
                    <th>Team Name</th>
                    <th>Mission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pioneers</td>
                    <td>The Pioneers team embodies the spirit of exploration and innovation, developing cutting-edge solutions that set new benchmarks in the industry.</td>
                  </tr>
                  <tr>
                    <td>Unity Developers</td>
                    <td>The Unity Developers team is dedicated to fostering collaboration and harmony in software development. Our mission is to create cutting-edge software that meets and exceeds the needs of our clients.</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section id="resources">
              <h2>Resources</h2>
              <table>
                <thead>
                  <tr>
                    <th>Resource Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Development Guidelines</td>
                    <td>Access our Development Guidelines for best practices, coding standards, and tools.</td>
                  </tr>
                  <tr>
                    <td>Contributing</td>
                    <td>Interested in contributing to our projects? Check out our Contributing Guide for details on how to get involved.</td>
                  </tr>
                  <tr>
                    <td>Support</td>
                    <td>Need help? Visit our Support section for technical assistance and troubleshooting resources.</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </Col>
          <Col className="right-column" md={3}>
            <div className="content">
              <section id="community">
                <h2>Community</h2>
                <p>Join the AtonixCorp community and stay connected!</p>
                <ul className="social-icons">
                  <li><a href="https://twitter.com/AtonixCorp" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="https://github.com/AtonixCorp" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a></li>
                  <li><a href="https://discord.gg/AtonixCorp" aria-label="Discord"><FontAwesomeIcon icon={faDiscord} /></a></li>
                  <li><a href="https://www.linkedin.com/company/AtonixCorp" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="https://atonixcorp.slack.com" aria-label="Slack"><FontAwesomeIcon icon={faSlack} /></a></li>
                </ul>
              </section>
              <section id="contact-information">
                <h2>Contact Information</h2>
                <p>For any questions or support, please contact:</p>
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default HomePage;
