import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import ProductGrid from './components/ProductGrid';
import CartTray from './components/CartTray';
const RouterComp = ({onAddToCart ,onAddToCartTray}) => (
  <Routes>
    <Route path="Webpage/" element={<Home/>}/>
    <Route path="Webpage/products" element={<ProductGrid onAddToCart={onAddToCart}/>}/>
     <Route path="Webpage/cart" element={<CartTray onAddToCartTray = {onAddToCartTray}/>}/>
  </Routes>
);

export default RouterComp;
