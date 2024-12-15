import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Navbar from '../components/Navbar';
import Product from './pages/Product';

function UserRouter() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default UserRouter;
