import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser, checkUsername } from '../../api/userApi';
import { AuthContext } from '../../contexts/authContext';

function SignUp() {
  const navigate = useNavigate();
  const {signup} = useContext(AuthContext);
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    role:'user',
    block: false
  })
  const [errors, setErrors] = useState({});
  const handleOnChange = (e) =>{
    const {name, value} = e.target;
    setUserData({...userData, [name]: value})
  }

  const validateForm = () => {
    const newErrors = {};
    
    if (!userData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!userData.username.trim()) {
      newErrors.username = "Username is required.";
    }
    if (!userData.email.trim()) {
      newErrors.email = "Email is required.";
    }
    if (!userData.password.trim()) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOnSubmit = async (e) =>{
    e.preventDefault();
    if(validateForm()){
      const signupErrors = await signup(userData);
      if(signupErrors!==''){
        setErrors({...errors, signupErrors})
      }
    }
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='flex md:flex-row flex-col-reverse shadow-xl border mt-5 md:mt-28 rounded-md'>
        <form className='flex flex-col justify-center space-y-6 px-5 h-[450px] w-[400px] md:w-[350px] p-3' onSubmit={(e)=>handleOnSubmit(e)} >
          <span className='text-center font-bold text-2xl'>SIGN UP</span>
          {errors.signupErrors && <span className='text-center text-red-500'>{errors.signupErrors}</span>}
          <input className={`border-b border-gray-400 h-9 p-2 focus:outline-none ${ errors.name && 'placeholder-red-500'}`} value={userData.name} onChange={(e)=>handleOnChange(e)} type="text" name='name' placeholder={errors.name?errors.name:'Name'}/>
          <input className={`border-b border-gray-400 h-9 p-2 focus:outline-none ${ errors.username && 'placeholder-red-500'}`} value={userData.username} onChange={(e)=>handleOnChange(e)} type="text" name='username' placeholder={errors.username?errors.username:'Username'}/>
          <input className={`border-b border-gray-400 h-9 p-2 focus:outline-none ${ errors.email && 'placeholder-red-500'}`} value={userData.email} onChange={(e)=>handleOnChange(e)} type="text" name='email' placeholder={errors.email?errors.email:'Email'}/>
          <input className={`border-b border-gray-400 h-9 p-2 focus:outline-none ${ errors.password && 'placeholder-red-500'}`} value={userData.password} onChange={(e)=>handleOnChange(e)} type="password" name='password' placeholder={errors.password?errors.password:'Password'}/>
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