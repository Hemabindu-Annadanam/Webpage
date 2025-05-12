import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import "./Header.css"
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
const Header = ({ cartCount }) => (
  <Navbar className="custom-navbar" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#">My Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
          <Nav.Link as={Link} to="/products" className="text-white">Products</Nav.Link>
          <Nav.Link href="#" className="text-white position-relative">
            <FaShoppingCart size={20} />
            <Badge bg="danger" pill className="position-absolute top-5 start-100 translate-middle">
                {cartCount}
              </Badge>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default Header;

