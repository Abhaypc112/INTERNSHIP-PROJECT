import React, { useContext, useEffect, useState } from 'react'
import { getAllOrdersByUserId } from '../../api/userApi'
import { CartContext } from '../../contexts/cartContext'

function Order() {
    const userId = localStorage.getItem('userId')
    const {cart} = useContext(CartContext);
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        getAllOrdersByUserId(userId)
        .then((res)=>setOrders(res))
        .catch((err)=>console.error(err))
    },[cart]);

  return (
    <div>
      <section>
            <div className='flex justify-center mt-10'>
                <table className='w-[80%]'>
                    <thead>
                        <tr>
                            <th>PRODUCT</th>
                            <th>DATE</th>
                            <th>ADDRESS</th>
                            <th>MOBILE</th>
                            <th>AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders && orders.length>0 && orders.map(order=>(
                                order.products.map(product=>(
                                    <tr key={product.id} className='text-center border-y-2 h-14'>
                                        <td className='flex items-center flex-col'><img className='w-14 h-14' src={product.image} alt="Product" />
                                        <span className='text-xs'>{product.name}</span></td>
                                        <td>{order.date}</td>
                                        <td>{order.deliveryAddress.address}</td>
                                        <td>{order.deliveryAddress.mobile}</td>
                                        <td>₹ {product.price * product.quantity}</td>
                                    </tr>
                                ))
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    </div>
  )
}

export default Order
