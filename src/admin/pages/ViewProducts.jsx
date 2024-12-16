import React from 'react'

function ViewProducts() {
  return (
    <div>
      <section>
            <div className='flex justify-center mt-10'>
                <table className='w-[80%]'>
                    <tr>
                        <th>NO</th>
                        <th>ITEM</th>
                        <th>NAME</th>
                        <th>DISCRIPTION</th>
                        <th>PRICE</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                    <tr className='text-center border-y-2 h-14'>
                        <td>#1</td>
                        <td className='flex justify-center'><img className='w-14 h-14' src="https://www.imagineonline.store/cdn/shop/files/iPhone_16_Ultramarine_PDP_Image_Position_1__en-IN_be8b658c-2ab8-4796-9a8a-216864e1df03.jpg?v=1727247795&width=1445" alt="Product" /></td>
                        <td>I Phone 16</td>
                        <td>Discription</td>
                        <td>₹ 70000</td>
                        <td><button className='bg-blue-600 px-2 rounded-md p-1'>Edit</button></td>
                        <td><button className='bg-red-500 px-2 rounded-md p-1'>Remove</button></td>
                    </tr>
                    
                    
                </table>
            </div>
        </section>
    </div>
  )
}

export default ViewProducts
