import axios from 'axios';

const PRODUCT_URL = "http://localhost:5000/mobiles";


export const getAllProducts=()=>{
    return axios.get(PRODUCT_URL);
}