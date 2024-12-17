import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkIsAdmin } from '../../api/adminApi';
import { checkUser } from '../../api/userApi';
import { AuthContext } from '../../contexts/authContext';


function Login() {
  const navigate = useNavigate();
  const {login} = useContext(AuthContext); 
  const [userData, setUserData] = useState({
      username: '',
      password: ''
    })
    const [errors, setErrors] = useState({});
    const handleOnChange = (e) =>{
      const {name, value} = e.target;
      setUserData({...userData, [name]: value})
    }
  
    const validateForm = () => {
      const newErrors = {};
  
      if (!userData.username.trim()) {
        newErrors.username = "Username is required.";
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
        const isValidUser = await login(userData.username, userData.password);
        if(!isValidUser){
          setErrors({...errors,isValidUser: "Invalid username or password"})
        }
      }
    }
  return (
    <div className='flex justify-center items-center'>
      <div className='flex md:flex-row flex-col shadow-xl border mt-5 md:mt-28 rounded-md'>
        <div>
          <img className='h-[150px] md:h-[450px] w-[400px] rounded-s-md object-cover' src="https://img.freepik.com/free-vector/retro-instagram-stories_79603-929.jpg?t=st=1734347936~exp=1734351536~hmac=3d42fc33c1acff3e7898edd77f801648319ed30981975c241701f49edea13bb1&w=740" alt="" />
        </div>
        <form className='flex flex-col justify-center space-y-8 h-[350px] md:h-[450px] w-[400px] md:w-[350px] p-3' onSubmit={(e)=>handleOnSubmit(e)} >
          <span className='text-center font-bold text-2xl'>LOGIN</span>
          {errors.isValidUser && <span className='text-center text-red-500'>{errors.isValidUser}</span>}
          <input className={`border-b border-gray-400 h-9 p-2 focus:outline-none ${ errors.username && 'placeholder-red-500'}`} value={userData.username} onChange={(e)=>handleOnChange(e)} type="text" name='username' placeholder={errors.username?errors.username:'Username'}/>
          <input className={`border-b border-gray-400 h-9 p-2 focus:outline-none ${ errors.password && 'placeholder-red-500'}`} value={userData.password} onChange={(e)=>handleOnChange(e)} type="password" name='password' placeholder={errors.password?errors.password:'Password'}/>
          <button className='border border-gray-400 rounded-md h-10 p-2 bg-blue-400 text-white'>Continue</button>
          <span>New here ? <span onClick={()=>navigate('/signup')} className='text-blue-400 cursor-pointer'> Signup</span></span>
        </form>
      </div>
    </div>
  )
}

export default Login