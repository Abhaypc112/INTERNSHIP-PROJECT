import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../api/productApi';

function Product() {
    const {productId} = useParams();
    const [product,setProduct] = useState({});
    useEffect(()=>{
        getProductById(productId)
        .then((res) => setProduct(res.data))
    },[])
  return (
    <div className='flex md:flex-row flex-col justify-center w-[100%] h-[40rem] items-center'>
      <div className='md:w-[60%] w-[80%] h-[35rem] flex flex-col md:flex-row shadow-md border overflow-scroll md:overflow-hidden custom-scrollbar p-2'>
        <div className=' bg-white md:w-[50%] w-[100%] flex justify-center items-center'>
            <img src="https://www.imagineonline.store/cdn/shop/files/iPhone_16_Ultramarine_PDP_Image_Position_1__en-IN_be8b658c-2ab8-4796-9a8a-216864e1df03.jpg?v=1727247795&width=1445" alt="Image not load" />
        </div>
        <div className=' md:w-[50%] w-[100%] h-[100%] flex-col '>
           <div className='h-[60%]  flex flex-col justify-evenly '>
                <h1 className='font-extrabold text-5xl'>{product.name}</h1>
                <p>{product.description}</p>
                <p>⭐ 4.6</p>
                <h1 className='font-extrabold text-2xl'>₹ {product.price}</h1>
                <button className='bg-black text-white px-2 p-4 rounded-md w-[50%]'>Add to cart</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Product
