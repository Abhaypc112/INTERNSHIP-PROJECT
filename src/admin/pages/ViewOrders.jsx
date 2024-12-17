import React, { useEffect, useState } from 'react'
import { getAllOrders } from '../../api/adminApi';

function ViewOrders() {
  const [orders,setOrders] = useState([]);
  useEffect(()=>{
    getAllOrders()
    .then((res) => setOrders(res.data))
  },[])
  return (
    <div>
      <section>
            <div className='flex justify-center mt-10'>
                <table className='w-[80%]'>
                    <tr>
                        <th>ITEM</th>
                        <th>NAME</th>
                        <th>ADDREESS</th>
                        <th>PRICE</th>
                        <th>PAYMNET</th>
                    </tr>
                    {
                      orders && orders.map((order)=>{
                       return order.products.map((product,index)=>{
                          return(
                            <tr key={index} className='text-center border-y-2 h-14 text-xs md:text-base'>
                              <td className='flex justify-center'><img className='w-12 h-12' src={product.image} alt="Product" /></td>
                              <td>{product.name}</td>
                              <td><span className='text-xs'>{order.deliveryAddress.address}</span>
                                <p className='text-xs'>{order.deliveryAddress.mobile}</p>
                              </td>
                              <td>₹ {product.price}
                                <p className='text-xs'><span>Quantity : </span>{product.quantity}</p>
                              </td>
                              <td><span>{order.paymentMethode}</span>
                                <p className='text-xs'>OrderId : {order.id}</p>
                                <p className='text-xs'>Date : {order.date}</p>
                              </td>
                      </tr>
                          )
                        })              
                      })
                    }
                    
                    
                </table>
            </div>
        </section>
    </div>
  )
}

export default ViewOrders
