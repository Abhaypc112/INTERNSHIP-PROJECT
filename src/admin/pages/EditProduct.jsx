import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../../api/productApi';
import { updateProducts } from '../../api/adminApi';

function EditProduct() {
    const [productData,setProductData] = useState({name:"",description:"",price:0,image:""});
    const navigate = useNavigate();
    const {productId} = useParams();

    useEffect(()=>{
        getProductById(productId)
        .then((res)=>setProductData(res.data))
    },[])
    function handleOnChange (e) {
        const{name,value} = e.target;
        setProductData({...productData,[name]:value})
    }
    function addProduct (e){
        e.preventDefault()
        updateProducts(productId,productData)
        navigate('/admin/view-products')
    }
  return (
    <div className='flex justify-center items-center h-[40rem]'>
      <div className='w-[60%] h-[35rem] bg-slate-300 p-10 flex flex-col justify-between rounded-md'>
      <h1 className='text-2xl font-bold'>Edit Product</h1>
      <form onSubmit={addProduct} className='flex flex-col space-y-3'>
            <label htmlFor="name">Product Name</label>
            <input onChange={handleOnChange} value={productData.name} type="text" name='name' className='border h-10 rounded-md ' required/>
            <label htmlFor="description">Description</label>
            <input onChange={handleOnChange} value={productData.description} type="text" name='description' className='border h-10 rounded-md' required/>
            <label htmlFor="price">Price</label>
            <input onChange={handleOnChange} type="number" value={productData.price} name='price' className='border h-10 rounded-md' required/>
            <label htmlFor="image">Image</label>
            <img className='w-12 h-12' src={productData.image} alt="" /><input onChange={handleOnChange} type="text" name='image' value={productData.image} className='border h-10 rounded-md' required/>
            <button type='submit' className='bg-black text-white px-10 rounded-md p-2'>Edit Product</button>
        </form>
      </div>
    </div>
  )
}

export default EditProduct
