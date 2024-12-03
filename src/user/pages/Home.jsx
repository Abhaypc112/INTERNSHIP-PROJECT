import React from 'react';
import ProductCard from '../../components/ProductCard';

function Home() {
  return (
    <div>
     <div className='flex flex-wrap justify-center gap-9 p-10'>
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
