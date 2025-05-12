import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, onAddToCart}) => {
  const handleAddToCart = () => {
    alert(`${product.title} added to cart!`);
    onAddToCart();
  };
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={product.image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button  onClick={handleAddToCart}  style={{ backgroundColor: '#a063c1', borderColor: '#a063c1' }} className="mt-auto">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
