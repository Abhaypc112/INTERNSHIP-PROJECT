import React, { useEffect, useState } from 'react';
// import ProductCard from '../../components/ProductCard';
import { getAllProducts } from '../../api/productApi';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getAllProducts()
    .then(res=>setProducts(res.data))
    .catch(err=>console.error(err))
  },[]);

  return (
    <div>
     <div className='flex flex-wrap justify-center gap-9 p-10'>
     {
        products.length>0 && products.map(product=>(
          <div key={product.id}>
            <div className='shadow-md w-[11rem] h-[16rem] border'>
              <div className='h-[60%] flex justify-center'>
                  <img className='w-36 h-36' src="https://www.imagineonline.store/cdn/shop/files/iPhone_16_Ultramarine_PDP_Image_Position_1__en-IN_be8b658c-2ab8-4796-9a8a-216864e1df03.jpg?v=1727247795&width=1445" alt="Product image" />
              </div>
              <div className='p-2 font-semibold'>
                  <h1 className='font-semibold'>{product.name}</h1>
                  <h1 className='font-semibold'>₹{product.price}</h1>
                  <button className='bg-black text-white px-2 p-1 rounded-md'>Add to cart</button>
              </div>
            </div>
          </div>
        ))
      }
     </div>
    </div>
  )
}

export default Home
