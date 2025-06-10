import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import "./Header.css"
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartCount = useSelector(state => state.cart.items.length);

  return (
  <Navbar bg="light" expand="lg" className="custom-navbar fixed-top shadow-sm">
    <Container fluid>
      <Navbar.Brand as={Link} to="/Webpage/" className="d-flex align-items-center gap-2 nav-brand">
        <img src='https://www.seekpng.com/png/small/134-1344280_add-items-to-cart-minimalist-shopping-cart.png'
          // src="https://lh5.googleusercontent.com/proxy/RSW3EA1hu8-QB1whdnrC2io3Jaktqa9WJHw_bxmhPu6Cfpl5zmKjO_sNQiH5v5yxe8MEX2e1xtDUcfY29vAaR_wHVXJ-tUOUXO9OxNIQRcs9bb16axpQPN9hBN-YngYNxEe9Rxm9V0USTj7iXls9u2lQz9cN8fnQvF8jibXXyxaMz8aNdHR4ADMSa0agygktdcY1yND45z6qTj5ySL5LHWmvvVW57auz0_0SFVuYPMYQkanUNgIawUjMqxjrczcf3myWRY_9A0Ph7zWsfkGV4YFcMpvKHTVm1Fk3heB-2Kv2bJcGYhR8x-jnSAqTQQppaAVMNYJrdOTt9XlWafpqR7tIslR6p2kMbkJLtT-RKDS2WCvCYsmPmsKjDulfkVx52X9KwtxSPpQW4vsR82Aa0IjDcok6gTEMHmBVGwK5k1sa-BeVmFwVpyH5ltTJcy1mcDmE1LrKk80s0PELPFrWBJWJ9Fp628ZriqteGgJOTAdlrEedK2c1TfojHZDAaDPwKx0fD8qdSBJaHF5P59gN0YwR0Nyi_HafMa3we9lm"
          alt="img not found"
          style={{ height: '40px', width: 'auto' }}
          className='img-style'
        />
         <span className="fw-bold fs-5 text-dark">Click Kart</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto my-2 my-lg-0 align-items-center text-center text-lg-start scroll-nav"  style={{ maxHeight: '100px' }}
            navbarScroll>
          <Nav.Link as={Link} to="/Webpage/" className="text-dark fw-bold">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/Webpage/products" className="text-dark fw-bold">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/Webpage/cart" className="text-dark position-relative">
            <FaShoppingCart size={20} />
            <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
              {cartCount}
            </Badge>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;

