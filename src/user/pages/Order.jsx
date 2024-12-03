import React from 'react'

function Order() {
  return (
    <div>
      <section>
            <div className='flex justify-center mt-10'>
                <table className='w-[80%]'>
                    <tr>
                        <th>PRODUCT</th>
                        <th>DATE</th>
                        <th>ADDRESS</th>
                        <th>MOBILE</th>
                        <th>AMOUNT</th>
                    </tr>
                    <tr className='text-center border-y-2 h-14'>
                        <td className='flex items-center flex-col'><img className='w-14 h-14' src="https://www.imagineonline.store/cdn/shop/files/iPhone_16_Ultramarine_PDP_Image_Position_1__en-IN_be8b658c-2ab8-4796-9a8a-216864e1df03.jpg?v=1727247795&width=1445" alt="Product image" />
                        <span className='text-xs'>I Phone 16</span></td>
                        <td>24-04-2024 - 12:00PM</td>
                        <td>Ramanattukata</td>
                        <td>+91 8978766609</td>
                        <td>₹ 140000</td>
                    </tr>
                    <tr className='text-center border-y-2 h-14'>
                        <td className='flex items-center flex-col'><img className='w-14 h-14' src="https://www.imagineonline.store/cdn/shop/files/iPhone_16_Ultramarine_PDP_Image_Position_1__en-IN_be8b658c-2ab8-4796-9a8a-216864e1df03.jpg?v=1727247795&width=1445" alt="Product image" />
                        <span className='text-xs'>I Phone 16</span></td>
                        <td>24-04-2024 - 12:00PM</td>
                        <td>Ramanattukata</td>
                        <td>+91 8978766609</td>
                        <td>₹ 140000</td>
                    </tr>
                    <tr className='text-center border-y-2 h-14'>
                        <td className='flex items-center flex-col'><img className='w-14 h-14' src="https://www.imagineonline.store/cdn/shop/files/iPhone_16_Ultramarine_PDP_Image_Position_1__en-IN_be8b658c-2ab8-4796-9a8a-216864e1df03.jpg?v=1727247795&width=1445" alt="Product image" />
                        <span className='text-xs'>I Phone 16</span></td>
                        <td>24-04-2024 - 12:00PM</td>
                        <td>Ramanattukata</td>
                        <td>+91 8978766609</td>
                        <td>₹ 140000</td>
                    </tr>
                </table>
            </div>
        </section>
    </div>
  )
}

export default Order
