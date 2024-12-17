import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/productApi';
import { getAllOrders, getAllUsers } from '../../api/adminApi';



function Dashboard() {
  const [totalProducts,setTotalProducts] = useState(0);
  const [totalUsers,setTotalUsers] = useState(0);
  const [totalOrders,setTotalOrders] = useState(0);
  useEffect(()=>{
    getAllProducts()
    .then((res) => setTotalProducts(res.data.length));
    getAllUsers()
    .then((res) => setTotalUsers(res.data.length));
    getAllOrders()
    .then((res)=>setTotalOrders(res.data.length));
  },[])
  return (
    <div>
      <div className=' w-[100%] h-[40rem] flex'>
        <div className='grid md:grid-cols-6 grid-cols-1 grid-rows-3 md:grid-rows-2 p-10 gap-10 md:h-[31rem] w-[100%]'>
            <div className='border rounded bg-blue-300 shadow-md col-span-2 text-4xl font-bold flex flex-col justify-center items-center'>
              <h1>Total Product</h1>
              <h1>{totalProducts}</h1>
            </div>
            <div className='border rounded bg-yellow-300 shadow-md col-span-2 text-4xl font-bold flex flex-col justify-center items-center'>
              <h1>Total User</h1>
              <h1>{totalUsers}</h1>
            </div>
            <div className='border rounded bg-green-300 shadow-md col-span-2 text-4xl font-bold flex flex-col justify-center items-center'>
              <h1>Total Order</h1>
              <h1>{totalOrders}</h1>
            </div>
            {/* <div className='border rounded  col-span-2 shadow-md'>View Products</div>
            <div className='border rounded  col-span-2 shadow-md'>View Users</div>
            <div className='border rounded  col-span-2 shadow-md'>View Orders</div> */}
        </div>
        
        
      </div>
    </div>
  )
}

export default Dashboard
