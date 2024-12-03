import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
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
            <input type="search" placeholder='Search...' className='bg-transparent w-[100%] focus:outline-none' />
          </div>
          <div className='flex gap-5 items-center'>
            <h1>Abhay</h1>
            <button className='bg-yellow bg-yellow-400 p-1 px-2 rounded-md font-semibold'>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
