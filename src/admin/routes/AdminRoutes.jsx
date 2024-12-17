import React from 'react'
import Dashboard from '../pages/Dashboard'
import ViewProducts from '../pages/ViewProducts'
import ViewUsers from '../pages/ViewUsers'
import ViewOrders from '../pages/ViewOrders'
import AddProduct from '../pages/AddProduct'
import EditProduct from '../pages/EditProduct'

const AdminRoutes = [
  {path: '/admin', element:<Dashboard/>},
  {path: '/admin/view-products', element:<ViewProducts/>},
  {path: '/admin/view-users', element:<ViewUsers/>},
  {path: '/admin/view-orders', element:<ViewOrders/>},  
  {path: '/admin/add-product', element:<AddProduct/>},  
  {path: '/admin/edit-product/:produtId', element:<EditProduct/>},  
]

export default AdminRoutes
