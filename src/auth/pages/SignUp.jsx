import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center'>
      <div className='flex md:flex-row flex-col shadow-xl border mt-28 rounded-md'>
        <form className='flex flex-col justify-center space-y-7 px-5 h-[450px] w-[350px] p-3'>
          <span className='text-center font-bold text-2xl'>SIGN UP</span>
          <input className='border-b border-gray-400 h-9 p-2 focus:outline-none' type="text" name='name' placeholder='Name'/>
          <input className='border-b border-gray-400 h-9 p-2 focus:outline-none' type="text" name='username' placeholder='Username'/>
          <input className='border-b border-gray-400 h-9 p-2 focus:outline-none' type="text" name='email' placeholder='Email'/>
          <input className='border-b border-gray-400 h-9 p-2 focus:outline-none' type="password" name='name' placeholder='Password'/>
          <button className='border border-gray-400 rounded-md h-10 p-2 bg-blue-400 text-white'>Continue</button>
          <span>Already have an account?<span onClick={()=>navigate('/signin')} className='text-blue-400 cursor-pointer'> Login</span></span>
        </form>
        <div>
          <img className='h-[450px] w-[400px] rounded-e-md object-cover' src="https://img.freepik.com/premium-photo/colorful-phone-backgrounds-visual-guide-mobile-design-collection-smartphones-showc_924727-47030.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SignUp