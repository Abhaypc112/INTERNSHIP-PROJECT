import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState(5);
  const user = localStorage.getItem('user');
  return (
    <div>
      <nav>
        <div className='shadow-md w-[100%] flex h-[5rem] items-center justify-between px-5'>
          <ul className='flex w-[50%] md:w-[40%] lg:w-[30%] justify-between items-center font-semibold '>
            <img src='https://simicart.com/wp-content/uploads/eCommerce-logo.jpg' className='cursor-pointer w-20 h-20 ' alt='Logo'/>
            <NavLink to="/"><li className='cursor-pointer hidden md:flex'>Home</li></NavLink>
            <NavLink to="/cart">
              <li className='cursor-pointer relative'>Cart 
                <span className='relative text-xs px-1 rounded-full bg-yellow-400 '>1</span>
              </li>
            </NavLink>
            <NavLink to="/order"><li className='cursor-pointer'>Orders</li></NavLink>
          </ul>
          <div className='w-[20%] border-b-2 border-black hidden md:flex'>
            <div className='relative w-full'>
            <input onFocus={()=>setShowModal(true)} type="search" placeholder='Search...' className='bg-transparent w-[100%] focus:outline-none' />
            {showModal && (
              <div className='absolute left-0 mt-3 overflow-y-auto z-50 w-full max-h-60 bg-white border rounded-lg'>
                <ul className='divide-y divide-gray-300'>
                  {[...Array(products)].map(product=>(
                    <li className='cursor-pointer p-2'>product name</li>
                  ))}
                </ul>
              </div>
            )}
            </div>
          </div>
          <div className='flex gap-5 items-center'>
            <h1>{user}</h1>
            <button className='bg-yellow bg-yellow-400 p-1 px-2 rounded-md font-semibold'>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
