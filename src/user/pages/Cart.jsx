import React from 'react'

function Cart() {
  return (
    <div>
        <section>
            <div className='flex justify-center mt-10'>
                <table className='w-[80%]'>
                    <tr>
                        <th>ITEM</th>
                        <th>NAME</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                        <th>REMOVE</th>
                    </tr>
                    <tr className='text-center border-y-2 h-14'>
                        <td className='flex justify-center'><img className='w-14 h-14' src="https://www.imagineonline.store/cdn/shop/files/iPhone_16_Ultramarine_PDP_Image_Position_1__en-IN_be8b658c-2ab8-4796-9a8a-216864e1df03.jpg?v=1727247795&width=1445" alt="Product image" /></td>
                        <td>I Phone 16</td>
                        <td className='space-x-2'>
                            <span className='font-extrabold bg-gray-400 px-2.5 rounded-sm cursor-pointer'>-</span> 
                            <span>1</span> 
                            <span className='font-extrabold bg-gray-400 px-2 rounded-sm cursor-pointer'>+</span></td>
                        <td>₹ 70000</td>
                        <td><button className='bg-red-500 px-2 rounded-md p-1'>Remove</button></td>
                    </tr>
                    <tr className='text-center border-y-2 h-14'>
                        <td className='flex justify-center'><img className='w-14 h-14' src="https://www.imagineonline.store/cdn/shop/files/iPhone_16_Ultramarine_PDP_Image_Position_1__en-IN_be8b658c-2ab8-4796-9a8a-216864e1df03.jpg?v=1727247795&width=1445" alt="Product image" /></td>
                        <td>I Phone 16</td>
                        <td className='space-x-2'>
                            <span className='font-extrabold bg-gray-400 px-2.5 rounded-sm cursor-pointer'>-</span> 
                            <span>1</span> 
                            <span className='font-extrabold bg-gray-400 px-2 rounded-sm cursor-pointer'>+</span></td>
                        <td>₹ 70000</td>
                        <td><button className='bg-red-500 px-2 rounded-md p-1'>Remove</button></td>
                    </tr>
                    <tr className='text-xl border-y-2 h-14'>
                        <th></th><th></th><th></th>
                        <th>TOTAL : </th>
                        <th>₹ 140000</th>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td>
                        <td className='flex justify-center '><button className='bg-green-500 px-2 p-1 rounded-md text-white mt-2'>Place order</button></td>
                    </tr>
                    
                </table>
            </div>
        </section>
    </div>
  )
}

export default Cart
