import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import ProductGrid from './components/ProductGrid';
import CartTray from './components/CartTray';
import Checkout from './components/CheckOut';
const RouterComp = () => (
  <Routes>
    <Route path="Webpage/" element={<Home/>}/>
    <Route path="Webpage/products" element={<ProductGrid/>}/>
     <Route path="Webpage/cart" element={<CartTray/>}/>
     <Route path='Webpage/checkout' element={<Checkout/>}/>
  </Routes>
);

export default RouterComp;
