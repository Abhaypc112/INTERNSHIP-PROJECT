import React,{createContext, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addUser, checkUser, checkUsername } from "../api/userApi";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const navigate=useNavigate();
    const [user,setUser]=useState([]);
    
    const signup = async(userData)=>{
        const isUsername = await checkUsername(userData.username)
        if(!isUsername){
            const validUser = await addUser(userData);
            setUser(validUser);
            localStorage.setItem("user", validUser.username);
            localStorage.setItem("userId", validUser.id);
            navigate('/');
            return "";
        }else{
            return "Username already taken!";
        }
    }


    const login = async(username,password)=>{
        try{
            const [validUser] = await checkUser(username, password);
            if(validUser){
                if(!validUser.block){
                    if(validUser.role==="admin"){
                        setUser(validUser);
                        localStorage.setItem("admin", validUser.username);
                        navigate('/admin');
                        return "";
                    }else{
                        setUser(validUser);
                        localStorage.setItem("user", validUser.username);
                        localStorage.setItem("userId", validUser.id);
                        navigate('/');
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
            navigate('/login')
        }
        else if(user || userId){
            localStorage.removeItem('user');
            localStorage.removeItem('userId');
            navigate('/login')
        }
    };

return(
    <AuthContext.Provider value={{user, signup, login, logout}}>
        {children}
    </AuthContext.Provider>
);
};