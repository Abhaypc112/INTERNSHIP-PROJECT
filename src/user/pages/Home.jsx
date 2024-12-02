import React from 'react'
import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard';

function Home() {
  return (
    <div>
      <Navbar/>
     <div className='flex flex-wrap gap-9 p-10'>
     {
        [...Array(10)].map((items)=>(
            <ProductCard/>
        ))
      }
     </div>
    </div>
  )
}

export default Home
