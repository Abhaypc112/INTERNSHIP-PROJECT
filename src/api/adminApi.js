import axios from "axios";
import React from "react";

const USER_URL = "http://localhost:5000/users";
const PRODUCT_URL = "http://localhost:5000/mobiles";

// export const checkIsAdmin = async (username, password)=>{
//     const res = await axios.get(`${URL}?username=${username}&password=${password}`)
//     return res.data.role==="admin";
// }