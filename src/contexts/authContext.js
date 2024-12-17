import React,{createContext, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../api/userApi";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const navigate=useNavigate();
    const [user,setUser]=useState([]);
    
    const login = async(username,password)=>{
        try{
            const [validUser] = await checkUser(username, password);
            if(validUser){
                if(!validUser.block){
                    if(validUser.role==="admin"){
                        setUser(validUser);
                        localStorage.setItem("admin", validUser.username);
                        setTimeout(()=>{
                            navigate('/admin');
                        },1000)
                        return "";
                    }else{
                        setUser(validUser);
                        localStorage.setItem("user", validUser.username);
                        localStorage.setItem("userId", validUser.id);
                        setTimeout(()=>{
                            navigate('/');
                        },1000)
                        return "";
                    }
                }else{
                    return "User Blocked!, Contact Admin";
                }
            }else{
                return "Invalid username or password";
            }
        }
        catch(err){
            console.error('Login error :',err);
        }
    };
    
    const logout =()=>{
        const userId=localStorage.getItem('userId');
        const user=localStorage.getItem('user');
        const admin=localStorage.getItem('admin');
        
        setUser([]);
        if(admin){
            localStorage.removeItem('admin');
            setTimeout(()=>{
                navigate('/login')
            },1000)
        }
        else if(user || userId){
            localStorage.removeItem('user');
            localStorage.removeItem('userId');
            setTimeout(()=>{
                navigate('/login')
            },1000)
        }
    };

return(
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
);
};