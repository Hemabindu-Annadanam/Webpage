import React, { useState } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import "./Header.css"
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartTray from './CartTray';

const Header = ({ cartCount,onAddToCart }) => {
    const [showCart, setShowCart] = useState(false);
      const showCartTray = () => {
     setShowCart(true); 
  };
  return (
    <div>
       <Navbar className="custom-navbar" variant="dark" expand="lg" sticky='top'>
    <Container>
      <Navbar.Brand >
        <Nav.Link as={Link} to="Webpage/" className="text-dark">My Store</Nav.Link>
        
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="Webpage/"  className="text-dark">Home</Nav.Link>
          <Nav.Link as={Link} to="Webpage/products" className="text-dark">Products</Nav.Link>
          <Nav.Link  className="text-dark position-relative" onClick={showCartTray} style={{ cursor: 'pointer' }}>
            <FaShoppingCart size={20} />
            <Badge bg="danger" pill className="position-absolute top-5 start-100 translate-middle">
                {cartCount}
              </Badge>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
       </Navbar>
        <CartTray onAddToCart={onAddToCart} show={showCart} onClose={() => setShowCart(false)} />
    </div>
  );
};

export default Header;

