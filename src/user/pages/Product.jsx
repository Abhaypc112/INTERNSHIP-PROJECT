import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../api/productApi';
import { CartContext } from '../../contexts/cartContext';

function Product() {
  const navigate = useNavigate();
  const {productId} = useParams();
  const [product,setProduct] = useState({});
  const [quntity, setQuntity] = useState(1);
  const {addToCart} = useContext(CartContext);

  useEffect(()=>{
    getProductById(productId)
    .then((res) => setProduct(res.data))
  },[productId])
  
  const handleAddToCart = async (product, quntity)=>{
    await addToCart(product , quntity);
    navigate('/cart');
  }


  return (
    <div className='flex md:flex-row flex-col justify-center w-[100%] h-[40rem] items-center'>
      <div className='md:w-[60%] w-[80%] h-[35rem] flex flex-col md:flex-row shadow-md border overflow-scroll md:overflow-hidden custom-scrollbar p-2'>
        <div className=' bg-white md:w-[50%] w-[100%] flex justify-center items-center'>
            <img src={product.image} alt={product.name} />
        </div>
        <div className=' md:w-[50%] w-[100%] h-[100%] flex-col mt-2'>
           <div className='h-[60%]  flex flex-col space-y-3 justify-evenly '>
                <h1 className='font-extrabold text-5xl'>{product.name}</h1>
                <p>{product.description}</p>
                <div className="flex items-center justify-between space-x-4 bg-gray-300 max-w-32 rounded-md">
                  <button
                    onClick={()=>setQuntity(prev=> prev===1 ? 1 : prev-1)}
                    className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-md active:scale-90 transition duration-200"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold text-gray-800">{quntity}</span>
                  <button
                  onClick={()=>setQuntity(prev => prev + 1)}
                    className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-md active:scale-90 transition duration-200"
                  >
                    +
                  </button>
                </div>
                <h1 className='font-extrabold text-2xl'>₹ {product.price}</h1>
                <button className='bg-black text-white px-2 p-4 rounded-md w-[50%] active:scale-95 transition duration-200' onClick={()=>handleAddToCart(product, quntity)}>Add to cart</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Product
