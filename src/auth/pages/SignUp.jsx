import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser, checkUsername } from '../../api/userApi';

function SignUp() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('');
  const handleOnChange = (e) =>{
    const {name, value} = e.target;
    setUserData({...userData, [name]: value})
  }
  const handleOnSubmit = async (e) =>{
    e.preventDefault();
    const isUsername = await checkUsername()
    if(!isUsername){
      addUser(userData);
      navigate('/home');
    }else{
      setError("Username already taken! ")
    }
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='flex md:flex-row flex-col-reverse shadow-xl border mt-5 md:mt-28 rounded-md'>
        <form className='flex flex-col justify-center space-y-6 px-5 h-[450px] w-[400px] md:w-[350px] p-3' onSubmit={(e)=>handleOnSubmit(e)} >
          <span className='text-center font-bold text-2xl'>SIGN UP</span>
          {error && <span className='text-center text-red-500'>{ error}</span>}
          <input className='border-b border-gray-400 h-9 p-2 focus:outline-none' value={userData.name} onChange={(e)=>handleOnChange(e)} type="text" name='name' placeholder='Name'/>
          <input className='border-b border-gray-400 h-9 p-2 focus:outline-none' value={userData.username} onChange={(e)=>handleOnChange(e)} type="text" name='username' placeholder='Username'/>
          <input className='border-b border-gray-400 h-9 p-2 focus:outline-none' value={userData.email} onChange={(e)=>handleOnChange(e)} type="text" name='email' placeholder='Email'/>
          <input className='border-b border-gray-400 h-9 p-2 focus:outline-none' value={userData.password} onChange={(e)=>handleOnChange(e)} type="password" name='password' placeholder='Password'/>
          <button className='border border-gray-400 rounded-md h-10 p-2 bg-blue-400 text-white'>Continue</button>
          <span>Already have an account?<span onClick={()=>navigate('/login')} className='text-blue-400 cursor-pointer'> Login</span></span>
        </form>
        <div>
          <img className='h-[150px] md:h-[450px] w-[400px] rounded-e-md object-cover' src="https://img.freepik.com/premium-photo/colorful-phone-backgrounds-visual-guide-mobile-design-collection-smartphones-showc_924727-47030.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SignUp