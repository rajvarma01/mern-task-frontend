import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CustomerRegister from './components/customerRegister';
import AdminRegister from './components/adminRegister';
import AdminLogin from './components/adminLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/customer-register">Customer Register</Nav.Link>
            <Nav.Link as={Link} to="/admin-register">Admin Register</Nav.Link>
            <Nav.Link as={Link} to="/admin-login">Admin Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/customer-register" element={<CustomerRegister />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
