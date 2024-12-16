import React, { useEffect, useState } from 'react';
// import ProductCard from '../../components/ProductCard';
import { getAllProducts } from '../../api/productApi';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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
            <div className='shadow-md w-[12rem] h-[17rem] border flex flex-col justify-between'>
              <div onClick={()=>navigate(`/product/${product.id}`)} className='h-[60%] flex justify-center'>
                  <img className='mt-3 min-w-28 max-w-36 h-36' src={product.image && product.image} alt={product.name} />
              </div>
              <div className='p-2 font-semibold h-[40%] flex flex-col justify-between'>
                  <h1 className='text-sm font-normal'>{product.name}</h1>
                  <h1 className='font-semibold'>₹{product.price}</h1>
                  <button className='bg-black text-white px-2 p-1 rounded-md w-[60%]'>Add to cart</button>
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
