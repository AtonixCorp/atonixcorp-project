
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faDiscord,
  faLinkedin,
  faSlack,
} from '@fortawesome/free-brands-svg-icons';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <section>
            <h2>Contact Us</h2>
            <p>We’d love to hear from you. Reach out or follow us below.</p>
            <ul className="social-icons">
              <li><a href="https://twitter.com/AtonixCorp" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="https://github.com/AtonixCorp" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a href="https://discord.gg/AtonixCorp" aria-label="Discord"><FontAwesomeIcon icon={faDiscord} /></a></li>
              <li><a href="https://www.linkedin.com/company/AtonixCorp" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="https://atonixcorp.slack.com" aria-label="Slack"><FontAwesomeIcon icon={faSlack} /></a></li>
            </ul>
          </section>
          <Form className="mt-4">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;