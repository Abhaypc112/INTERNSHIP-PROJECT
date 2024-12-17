import React, { useState } from 'react'
import { addProducts } from '../../api/adminApi';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const [productData,setProductData] = useState({name:"",description:"",price:0,image:""});
    const navigate = useNavigate();
    function handleOnChange (e) {
        const{name,value} = e.target;
        setProductData({...productData,[name]:value})
    }
    function addProduct (e){
        e.preventDefault()
        addProducts(productData)
        navigate('/admin/view-products')
    }
  return (
    <div className='flex justify-center items-center h-[40rem]'>
      <div className='w-[60%] h-[35rem] bg-slate-300 p-10 flex flex-col justify-between rounded-md'>
      <h1 className='text-2xl font-bold'>Add Product</h1>
      <form onSubmit={addProduct} className='flex flex-col space-y-3'>
            <label htmlFor="name">Product Name</label>
            <input onChange={handleOnChange} type="text" name='name' className='border h-10 rounded-md ' required/>
            <label htmlFor="description">Description</label>
            <input onChange={handleOnChange} type="text" name='description' className='border h-10 rounded-md' required/>
            <label htmlFor="price">Price</label>
            <input onChange={handleOnChange} type="number" name='price' className='border h-10 rounded-md' required/>
            <label htmlFor="image">Image</label>
            <input onChange={handleOnChange} type="text" name='image' className='border h-10 rounded-md' required/>
            <button type='submit' className='bg-black text-white px-10 rounded-md p-2'>Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
