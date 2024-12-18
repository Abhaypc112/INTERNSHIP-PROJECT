import axios from 'axios';

const PRODUCT_URL = "http://localhost:5000/mobiles";
const USER_URL = "http://localhost:5000/users";

// products

export const getAllProducts = () => {
    return axios.get(PRODUCT_URL);
}
export const getProductById = (productId) => {
    return axios.get(`${PRODUCT_URL}/${productId}`);
}

// cart

export const getCartById = async (userId)=>{
    const res= await axios.get(`${USER_URL}/${userId}`)
    return res.data.cart;
}

export const updateCart = async (userId, cartData)=>{
    return axios.put(`${USER_URL}/${userId}`, cartData);
}