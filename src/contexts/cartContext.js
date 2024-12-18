import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { updateCart } from "../api/productApi";
import { getUserById } from "../api/userApi";
import { AuthContext } from "./authContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = localStorage.getItem('userId');
    const {user:contextUser} = useContext(AuthContext);
    const [cartTotal, setCartTotal] = useState(0);

    const fetchUserData = async (userId) => {
        try {
          const userData = await getUserById(userId);          
          setUser(userData);
          setCart(userData.cart || []);
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally{
            setLoading(false);
        }
    };
    
    useEffect(()=>{
        if(userId){
            fetchUserData(userId);
        }
    },[contextUser])

    const totalCartPrice = async ()=>{
        const total = cart.reduce((acc,product)=>acc+(product.price*product.quantity),0)
        setCartTotal(total);
    }

    useEffect(()=>{
        totalCartPrice();
    },[cart])

    
    const updateCartOnServer = async (updatedCartData)=>{
        try{
            const updatedUser = {...user, cart: updatedCartData};
            await updateCart(user.id, updatedUser);
            setCart(updatedCartData);
        }
        catch(error){
            console.error("Error updating cart:", error);
        }
    };



    const addToCart = async(product, quantity = 1) =>{
        const existingItem = cart.find(item => item.id === product.id);
        let updatedCart;
        if(existingItem){
            updatedCart = cart.map(item=>(
                item.id === product.id ? {...item, quantity: item.quantity + quantity} : item
            ))
        }else{
            updatedCart = [...cart, { ...product, quantity}];
        }

        updateCartOnServer(updatedCart);
    }

    const removeFromCart = async (productId)=>{
        const updatedCart = cart.filter(product=> product.id!==productId);
        updateCartOnServer(updatedCart)
    }

    const updateCartQuantity = async (productId, quantity)=>{
        const updatedCart = cart.map(product=>(
            product.id === productId ? {...product,quantity} : product
        ));
        updateCartOnServer(updatedCart);
    }

    const clearCart = async () =>{
        updateCartOnServer([]);
    }

    return (
        <CartContext.Provider
        value={{
            cart,
            loading,
            cartTotal,
            addToCart,
            removeFromCart,
            updateCartQuantity,
            clearCart,
        }}
        >
        {children}
        </CartContext.Provider>
    );
}