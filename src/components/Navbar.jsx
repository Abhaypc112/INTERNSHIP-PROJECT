import React from 'react'

function Navbar() {
  return (
    <div>
      <nav>
        <div className='shadow-md w-[100%] flex h-[5rem] items-center justify-between px-5'>
          <ul className='flex w-[60%] md:w-[40%] lg:w-[30%] justify-between items-center font-bold '>
            <img src='https://simicart.com/wp-content/uploads/eCommerce-logo.jpg' className='cursor-pointer w-20 h-20 ' alt='Logo'/>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer relative'>Cart 
              <span className='relative text-xs px-1 rounded-full bg-yellow-400 '>1</span>
            </li>
            <li className='cursor-pointer'>Orders</li>
          </ul>
          <div className='flex gap-5 items-center'>
            <h1>Abhay</h1>
            <button className='bg-yellow bg-yellow-400 p-1 px-2 rounded-md font-bold'>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar