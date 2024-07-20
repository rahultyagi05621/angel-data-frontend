import React from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function ContactSupport() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="8">
          <h1>Breaker 404</h1>
          <hr />
          <Alert variant="danger">
            <Alert.Heading>Oops!</Alert.Heading>
            <p>Contact Support Team to know the reason.</p>
          </Alert>
          <h2>Contact Support</h2>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone:</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-2  '>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactSupport;