import axios from "axios";
import React from "react";

const USER_URL = "http://localhost:5000/users";

export const checkUsername= async (username)=>{
    const res = await axios.get(`${USER_URL}?username=${username}`);
    return res.data.length>0;
}

export const addUser=async (userData)=>{
    const res = await axios.post(USER_URL,userData);
    return res.data;
}

export const checkUser= async (username,password)=>{
    const res = await axios.get(`${USER_URL}?username=${username}&password=${password}`)
    return res.data;
}

