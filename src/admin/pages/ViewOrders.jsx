import React from 'react'

function ViewOrders() {
  return (
    <div>
      <section>
            <div className='flex justify-center mt-10'>
                <table className='w-[80%]'>
                    <tr>
                        <th>ITEM</th>
                        <th>NAME</th>
                        <th>ADDREESS</th>
                        <th>PRICE</th>
                        <th>MOBILE</th>
                        <th>PAYMNET</th>
                    </tr>
                    <tr className='text-center border-y-2 h-14 text-xs md:text-base'>
                        <td className='flex justify-center'><img className='w-14 h-14' src="https://www.imagineonline.store/cdn/shop/files/iPhone_16_Ultramarine_PDP_Image_Position_1__en-IN_be8b658c-2ab8-4796-9a8a-216864e1df03.jpg?v=1727247795&width=1445" alt="Product" /></td>
                        <td>I Phone 16</td>
                        <td>Ramanattukara</td>
                        <td>₹ 70000</td>
                        <td>9087675766</td>
                        <td>COD</td>
                    </tr>
                    
                    
                </table>
            </div>
        </section>
    </div>
  )
}

export default ViewOrders
