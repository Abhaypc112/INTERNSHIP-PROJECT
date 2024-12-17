import React from 'react'

function AddProduct() {
  return (
    <div className='flex justify-center items-center h-[40rem]'>
      <div className='w-[60%] h-[35rem] bg-slate-300 p-10 flex flex-col justify-between rounded-md'>
      <h1 className='text-2xl font-bold'>Add Product</h1>
      <form action="" className='flex flex-col space-y-3'>
            <label htmlFor="name">Product Name</label>
            <input type="text" name='name' className='border h-10 rounded-md'/>
            <label htmlFor="description">Description</label>
            <input type="text" name='description' className='border h-10 rounded-md'/>
            <label htmlFor="price">Price</label>
            <input type="number" name='price' className='border h-10 rounded-md'/>
            <label htmlFor="image">Image</label>
            <input type="text" name='image' className='border h-10 rounded-md'/>
            <button className='bg-black text-white px-10 rounded-md p-2'>Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
