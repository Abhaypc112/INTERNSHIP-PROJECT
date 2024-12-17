import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../api/productApi';
import { useNavigate } from 'react-router-dom';
import { deleteProducts } from '../../api/adminApi';

function ViewProducts() {
  const [products,setProducts] = useState([]);
  const naviagte = useNavigate();
  useEffect(()=>{
    getAllProducts()
    .then((res) => setProducts(res.data))
  },[])
  function handleDelete(productId){
    deleteProducts(productId)
    .then(()=>{
      getAllProducts()
    .then((res) => setProducts(res.data))
    })
  }
  return (
    <div>
      <section>
            <div className='flex justify-center mt-10'>
                <table className='w-[80%]'>
                  <button onClick={()=> naviagte('/admin/add-product')} className='bg-black text-white p-1 rounded-md px-2'>Add Product</button>
                    <tr>
                        <th>ITEM</th>
                        <th>NAME</th>
                        <th>DISCRIPTION</th>
                        <th>PRICE</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                   
                    {products && products.map((product,index)=>{
                      return(
                        <tr key={index} className='text-left  border-y-2 h-14 text-xs md:text-base'>
                          <td className='flex justify-center'><img className='w-10 h-10' src={product.image} alt="Product" /></td>
                          <td>{product.name}</td>
                          <td className='text-xs'>{product.description}</td>
                          <td>₹ {product.price}</td>
                          <td><button onClick={()=>naviagte(`/admin/edit-product/${product.id}`)} className='bg-blue-600 text-white px-2 rounded-md p-1'>Edit</button></td>
                          <td><button onClick={()=>handleDelete(product.id)} className='bg-red-500 px-2 text-white rounded-md p-1'>Delete</button></td>
                    </tr>
                      )
                    })}
                    
                </table>
            </div>
        </section>
    </div>
  )
}

export default ViewProducts
