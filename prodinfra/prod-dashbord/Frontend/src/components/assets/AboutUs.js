import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container fluid className="py-5 bg-white">
      <Row className="justify-content-center text-center mb-4">
        <Col md={10}>
          <h1 className="display-5 fw-bold">
            AtonixCorp: Empowering Innovation Through Data Analytics 🌐
          </h1>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title as="h2" className="h4">Company Biography</Card.Title>
              <Card.Text>
                Founded on the principles of innovation and excellence, AtonixCorp is a leading technology company specializing in advanced data analytics solutions tailored to meet the diverse needs of modern industries.
                With a dedicated team of passionate developers, security researchers, and software engineers, we are committed to building cutting-edge services that drive efficiency, sustainability, and growth across various sectors.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title as="h2" className="h4">Our Vision</Card.Title>
              <Card.Text>
                At AtonixCorp, we envision a world where data empowers organizations to make informed decisions, optimize operations, and enhance user experiences. We believe that through the intelligent application of data analytics, we can unlock new opportunities and create lasting impact in industries ranging from agriculture to energy.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title as="h2" className="h4">Our Expertise</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>IoT Solutions:</strong> We leverage the transformative power of the Internet of Things (IoT) to develop smart, interconnected ecosystems. Our solutions span various domains, including precision agriculture and industrial automation, facilitating seamless data exchange and actionable insights that drive operational excellence.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Agriculture Technology:</strong> Committed to fostering sustainable agriculture, we design innovative solutions that optimize irrigation, fertigation, and solar power systems. Our technologies empower small farmers by enhancing crop yields and resource efficiency, ensuring food security for future generations.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Oil Technology Research:</strong> AtonixCorp is deeply engaged in research and development efforts aimed at improving the efficiency and sustainability of oil extraction and processing. Our cutting-edge technologies assist in minimizing environmental impacts while maximizing resource recovery.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="text-center">
            <Card.Body>
              <Card.Title as="h2" className="h4">Join Us on Our Journey!</Card.Title>
              <Card.Text>
                At AtonixCorp, we are always looking for talented individuals who share our passion for innovation and sustainability. If you are interested in making a difference through data analytics and technology, we invite you to explore career opportunities with us.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;