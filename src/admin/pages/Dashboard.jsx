import React from 'react';


function Dashboard() {
  return (
    <div>
      <div className=' w-[100%] h-[40rem] flex'>
        <div className='grid grid-cols-6 grid-rows-2 p-10 gap-10 h-[31rem] w-[100%]'>
            <div className='border rounded bg-blue-300 shadow-md col-span-2 text-4xl font-bold flex flex-col justify-center items-center'>
              <h1>Total Product</h1>
              <h1>21</h1>
            </div>
            <div className='border rounded bg-yellow-300 shadow-md col-span-2 text-4xl font-bold flex flex-col justify-center items-center'>
              <h1>Total User</h1>
              <h1>6</h1>
            </div>
            <div className='border rounded bg-green-300 shadow-md col-span-2 text-4xl font-bold flex flex-col justify-center items-center'>
              <h1>Total Order</h1>
              <h1>10</h1>
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
