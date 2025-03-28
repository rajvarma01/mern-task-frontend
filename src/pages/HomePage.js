import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../src/logo.svg'; // Ensure this file exists

function HomePage() {
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={logo} style={{ width: '90%', margin: '0 auto' }} />
      </Card>
    </Container>
  );
}

export default HomePage;
