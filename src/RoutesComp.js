// import React from "react";
// import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom"
// import Home from "./components/Home";
// import ProductCard from "./components/ProductCard";

// function RouterComp(){
//     return(
//         <Router>
//            <Routes>
//            <Route path="/" element={<Home/>}/>
//            <Route path="/products" element={<ProductCard/>}/>
//            </Routes>
//         </Router>
//     )
// }

// export default RouterComp;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import ProductGrid from './components/ProductGrid';
const RouterComp = ({onAddToCart }) => (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<ProductGrid onAddToCart={onAddToCart}/>}/>
  </Routes>
);

export default RouterComp;
