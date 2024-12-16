import React,{createContext, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../api/userApi";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const navigate=useNavigate();
    const [user,setUser]=useState([]);
    const userId=localStorage.getItem('userId');
    const admin=localStorage.getItem('admin');
    
    const login = async(username,password)=>{
        try{
            const [validUser] = await checkUser(username, password);
            if(validUser){
                if(validUser.role==="admin"){
                    setUser(validUser);
                    localStorage.setItem("admin", validUser.username);
                    setTimeout(()=>{
                        navigate('/admin');
                    },1000)
                    return true;
                }else{
                    setUser(validUser);
                    localStorage.setItem("user", validUser.username);
                    localStorage.setItem("userId", validUser.id);
                    setTimeout(()=>{
                        navigate('/');
                    },1000)
                    return true;
                }
            }else{
                return false;
            }
        }
        catch(err){
            console.error('Login error :',err);
        }
    };

    const logout =()=>{
        // setUser(null);
        if(admin){
            localStorage.removeItem('admin');
            setTimeout(()=>{
                navigate('/home')
            },1000)
        }
        else if(userId){
            localStorage.removeItem('userId');
            setTimeout(()=>{
                navigate('/home')
            },1000)
        }
    };

return(
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
);
};