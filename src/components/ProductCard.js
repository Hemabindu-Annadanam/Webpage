import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProductCard.css'
 import {  toast } from 'react-toastify';
const ProductCard = ({ product, onAddToCart}) => {
  const handleAddToCart = () => {
    toast.success("Product added to cart!");
    onAddToCart();
  };
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={product.image} className="custom-img"/>
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
