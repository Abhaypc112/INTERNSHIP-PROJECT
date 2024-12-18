import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCartById } from '../../api/productApi'
import { CartContext } from '../../contexts/cartContext';

function Cart() {
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId');
    const { cart, cartTotal, removeFromCart, updateCartQuantity, loading } = useContext(CartContext);

    const handleRemoveFromCart = async(productId)=>{
        await removeFromCart(productId);
    }
    
    if (loading) return <p>Loading...</p>;
  return (
    <div>
        <section>
            <div className='flex justify-center mt-10'>
                {
                    cart && cart.length>0 ? (
                        <table className='w-[80%]'>
                            <thead>
                                <tr>
                                    <th>ITEM</th>
                                    <th>NAME</th>
                                    <th>QUANTITY</th>
                                    <th>PRICE</th>
                                    <th>REMOVE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(product=>(
                                        <tr key={product.id} className='text-center border-y-2 h-16'>
                                            <td className='flex justify-center items-center h-16'><img className='w-12 h-12' src={product.image && product.image} alt="Product" /></td>
                                            <td>{product.name}</td>
                                            <td className='space-x-2'>
                                                <span className='font-extrabold bg-gray-400 px-2.5 rounded-sm cursor-pointer' onClick={() => updateCartQuantity(product.id, (product.quantity>1 ? product.quantity - 1 : product.quantity))}>-</span> 
                                                <span>{product.quantity}</span> 
                                                <span className='font-extrabold bg-gray-400 px-2 rounded-sm cursor-pointer' onClick={() => updateCartQuantity(product.id, product.quantity + 1)}>+</span></td>
                                            <td>₹ {product.price * product.quantity}</td>
                                            <td><button className='bg-red-500 px-2 rounded-md p-1 text-white' onClick={()=>handleRemoveFromCart(product.id)}>Remove</button></td>
                                        </tr>
                                    ))
                                }
                                <tr className='text-xl border-y-2 h-14'>
                                    <th></th><th></th><th></th>
                                    <th>TOTAL : </th>
                                    <th>₹ {cartTotal}</th>
                                </tr>
                                <tr>
                                    <td></td><td></td><td></td><td></td>
                                    <td className='flex justify-center '><button onClick={()=>navigate('/payment')} className='bg-green-500 px-2 p-1 rounded-md text-white mt-2'>Place order</button></td>
                                </tr>
                            </tbody>
                        </table>
                    ):(
                        <span>empty cart</span>
                    )
                }
            </div>
        </section>
    </div>
  )
}

export default Cart
