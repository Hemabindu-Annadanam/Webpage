import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RouterComp from './RoutesComp';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

// Load cart count on initial render
  useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  if (Array.isArray(storedCart)) {
  setCartCount(storedCart.length);
  }
  }, []);
  const updateCartCount = () => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  if (Array.isArray(storedCart)) {
    setCartCount(storedCart.length);
  }
};
const onAddToCart = () => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  setCartCount(storedCart.reduce((total, item) => total + (item.quantity || 1), 0));
};

useEffect(() => {
  const handleCartUpdate = () => updateCartCount();
  window.addEventListener('cartUpdated', handleCartUpdate);
  return () => window.removeEventListener('cartUpdated', handleCartUpdate);
}, []);
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header cartCount={cartCount} onAddToCart={onAddToCart}/>
      <RouterComp onAddToCart={updateCartCount} />
       <ToastContainer position="top-center" autoClose={3000} />
      <Footer />
    </div>
  );
};

export default App;


