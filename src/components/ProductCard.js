import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProductCard.css'
 import {  toast } from 'react-toastify';
const ProductCard = ({ product, onAddToCart}) => {
   const handleAddToCart = () => {
    let cart;
    try {
      const storedCart = localStorage.getItem('cart');
      cart = JSON.parse(storedCart);
      if (!Array.isArray(cart)) {
        cart = [];
      }
    } catch (error) {
      cart = [];
    }
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('Product added to cart!');
    onAddToCart();
  };
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={product.image} className="custom-img"/>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className='card-tit'>${product.price}</Card.Text>
        <Button  onClick={handleAddToCart}  className="mt-auto card-btn">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

