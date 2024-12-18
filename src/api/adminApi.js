import axios from "axios";
import React from "react";

const BASE_URL = "https://e-app-server-internship.onrender.com"
const USER_URL = `${BASE_URL}/users`;
const PRODUCT_URL = `${BASE_URL}/mobiles`;
const ORDER_URL = `${BASE_URL}/orders`;

// export const checkIsAdmin = async (username, password)=>{
//     const res = await axios.get(`${URL}?username=${username}&password=${password}`)
//     return res.data.role==="admin";
// }

export const getAllUsers = async () => {
    return await axios.get(USER_URL)
}
export const updateUser = async (id,data) => {
    return await axios.patch(`${USER_URL}/${id}`,data)
}
export const getAllOrders = async () => {
    return await axios.get(ORDER_URL)
}
export const addProducts = async (productData) => {
    return await axios.post(PRODUCT_URL,productData)
}
export const updateProducts = async (id,productData) => {
    return await axios.patch(`${PRODUCT_URL}/${id}`,productData)
}
export const deleteProducts = async (id) => {
    return await axios.delete(`${PRODUCT_URL}/${id}`)
}