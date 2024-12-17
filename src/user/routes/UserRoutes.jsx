import React from 'react';
import Cart from '../pages/Cart';
import Order from '../pages/Order';
import Payment from '../pages/Payment';

const UserRoutes = [
  {path: '/cart', element:<Cart/>},
  {path: '/order', element:<Order/>},
  {path: '/payment', element:<Payment/>},
]
export default UserRoutes;
