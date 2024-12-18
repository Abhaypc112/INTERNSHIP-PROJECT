import axios from 'axios';

const PRODUCT_URL = "https://e-app-server-internship.onrender.com/mobiles";


export const getAllProducts = () => {
    return axios.get(PRODUCT_URL);
}
export const getProductById = (productId) => {
    return axios.get(`${PRODUCT_URL}/${productId}`);
}

