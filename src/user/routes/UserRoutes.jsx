import React from 'react';
import Cart from '../pages/Cart';
import Order from '../pages/Order';

const UserRoutes = [
  {path: '/cart', element:<Cart/>},
  {path: '/order', element:<Order/>},
]
export default UserRoutes;
