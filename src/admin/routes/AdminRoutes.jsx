import React from 'react'
import Dashboard from '../pages/Dashboard'
import ViewProducts from '../pages/ViewProducts'
import ViewUsers from '../pages/ViewUsers'
import ViewOrders from '../pages/ViewOrders'

const AdminRoutes = [
  {path: '/admin', element:<Dashboard/>},
  {path: '/admin/view-products', element:<ViewProducts/>},
  {path: '/admin/view-users', element:<ViewUsers/>},
  {path: '/admin/view-orders', element:<ViewOrders/>}
]

export default AdminRoutes
