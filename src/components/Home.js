// import React from 'react';
// import './Home.css'
// const Home = () => (
//     <div className="image-container">
//     <img 
//       src='https://media.istockphoto.com/id/1215812761/photo/internet-shopping-with-laptop.jpg?s=612x612&w=0&k=20&c=K4RcbDJLHIPZb_oU7okSK4dX1tkEJVU-jhqxYQwTP9s='
//     alt="background"
//       className="background-image"
//     />
//     <div className="content-overlay">
//     </div>
//   </div>
  
// );

// export default Home;
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="image-container">
    <img 
      src='https://media.istockphoto.com/id/1215812761/photo/internet-shopping-with-laptop.jpg?s=612x612&w=0&k=20&c=K4RcbDJLHIPZb_oU7okSK4dX1tkEJVU-jhqxYQwTP9s='
      alt="background"
      className="background-image"
    />
    <div className="content-overlay">
      <div className="overlay-content">
        <h1>Welcome to Our Store</h1>
        <p>Discover amazing deals and latest products!</p>
        {/* <button className="show-products-button" >Show Products</button> */}
        <Link to="/Webpage/products" className="show-products-button"> Show Products </Link> 
      </div>
    </div>
  </div>
);

export default Home;
