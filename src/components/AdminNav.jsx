import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/authContext'


function AdminNav() {
  const admin = localStorage.getItem('admin')
  const {logout} = useContext(AuthContext);
  return (
    <div>
      <nav>
        <div className='shadow-md w-[100%] flex h-[5rem] items-center justify-between px-5'>
          <ul className='flex w-[50%] md:w-[40%] lg:w-[30%] justify-between items-center font-semibold '>
            <img src='https://simicart.com/wp-content/uploads/eCommerce-logo.jpg' className='cursor-pointer w-20 h-20 ' alt='Logo'/>
            <NavLink to={'/admin'}><li className='hidden md:flex cursor-pointer'>Home</li></NavLink>
            <NavLink to={'/admin/view-products'}><li className='hidden md:flex cursor-pointer'>Products</li></NavLink>
            <NavLink to={'/admin/view-users'}><li className='cursor-pointer'>Users</li></NavLink>
            <NavLink to={'/admin/view-orders'}><li className='cursor-pointer'>Orders</li></NavLink>
          </ul>
          <div className='flex gap-5 items-center'>
            <h1>{admin}</h1>
            <button className='bg-yellow bg-yellow-400 p-1 px-2 rounded-md font-semibold' onClick={()=> logout()}>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default AdminNav
