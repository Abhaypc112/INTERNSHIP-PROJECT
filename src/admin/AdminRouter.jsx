import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AdminNav from '../components/AdminNav'

function AdminRouter() {
  return (
    <div>
    <AdminNav/>
      <Routes>
        <Route path='/admin' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default AdminRouter
