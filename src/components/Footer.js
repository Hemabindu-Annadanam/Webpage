import React, { memo } from 'react';
import { Container } from 'react-bootstrap';

const Footer = React.memo(function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <Container>
        <p className="mb-0">&copy; 2025 Click Kart. All rights reserved.</p>
      </Container>
    </footer>
  );
});

export default Footer;

