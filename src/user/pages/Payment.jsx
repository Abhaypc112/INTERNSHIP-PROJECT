import React from 'react'
import { useNavigate } from 'react-router-dom'

function Payment() {
    const navigate = useNavigate();
  return (
    <div className='flex  items-center md:items-start flex-col md:flex-row h-[40rem] w-[100%] p-2'>
      <div className='w-[90%] md:w-[70%]'>
      <section>
            <div className='flex justify-center mt-10'>
                <table className='w-[900%]'>
                    <tr>
                        <th>ITEM</th>
                        <th>NAME</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
        
                    </tr>
                    <tr className='text-center border-y-2 h-14'>
                        <td className='flex justify-center'><img className='w-14 h-14' src="https://www.imagineonline.store/cdn/shop/files/iPhone_16_Ultramarine_PDP_Image_Position_1__en-IN_be8b658c-2ab8-4796-9a8a-216864e1df03.jpg?v=1727247795&width=1445" alt="Product" /></td>
                        <td>I Phone 16</td>
                        <td className='space-x-2'><span>1</span> </td>
                        <td>₹ 70000</td>
            
                    </tr>
                </table>
            </div>
        </section>
      </div>
      <div className=' w-[90%] md:w-[30%] p-10 flex flex-col space-y-10'>
        <div>
        <h1 className='text-2xl font-bold'>Address</h1>
        </div>
        <form action="" className='flex flex-col'>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' className='border h-10 rounded-md'/>
            <label htmlFor="address">Address</label>
            <input type="text" name='address' className='border h-10 rounded-md'/>
            <label htmlFor="mobile">Mobile</label>
            <input type="number" name='mobile' className='border h-10 rounded-md'/>
        </form>
        <h1 className='text-2xl font-bold'>Payment methode</h1>
        <form action="">
            <div>
                <input type="radio" name='paymentMethode' />
                <label htmlFor="paymentMethode"> EMI</label>
            </div>
            <div>
                <input type="radio" name='paymentMethode' />
                <label htmlFor="paymentMethode"> Upi</label>
            </div>
            <div>
                <input type="radio" name='paymentMethode' />
                <label htmlFor="paymentMethode"> Cash on Delivery</label>
            </div>
        </form>
        <button onClick={()=>navigate('/order')} className='bg-black text-white px-10 rounded-md p-2'>Buy Order</button>
      </div>
    </div>
  )
}

export default Payment
