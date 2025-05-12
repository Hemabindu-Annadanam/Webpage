import React from 'react';
import './Home.css'
const Home = () => (
    <div className="image-container">
    <img 
      src="https://img.freepik.com/premium-photo/glass-smartphone-modern-mobile-device-3d-illustration-render_113524-390.jpg?semt=ais_hybrid&w=740" 
      alt="background"
      className="background-image"
    />
    <div className="content-overlay">
    <h2>Welcome to Our Mobile Store</h2>
    <p>Your one-stop shop for the latest smartphones and accessories. Discover top brands, exclusive deals, and the best customer service.</p>
    <p>Browse our collection now and find the perfect device that fits your needs and budget!</p>
    {/* <a href="/products" className="shop-now-btn">Shop Now</a> */}
    </div>
  </div>
  
);

export default Home;
