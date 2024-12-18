import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cartContext';
import { addToOrders } from '../../api/userApi';

function Payment() {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId')
    const {cart, cartTotal, clearCart} = useContext(CartContext);
    const [selectedOption, setSelectedOption] = useState("")
    const [address, setAddress] = useState({
        name: '',
        address: '',
        mobile:''
    })
    const handleAddressChange = (e) =>{
        const {name, value} = e.target;
        setAddress({...address, [name]: value})
    }
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    
    const handleOnPlaceOrder = async () =>{
        if(cart.length>0 && address.name && address.address && address.mobile && selectedOption.length>0){
            const d=new Date()
            const orderData = {userId, products:cart, totalAmount: cartTotal, date: d.toDateString(), paymentMethode: selectedOption, deliveryAddress: address};
            await addToOrders(orderData);
            await clearCart();
            setAddress({
                name: '',
                address: '',
                mobile:''
            })
            setSelectedOption("");
        }else if(!cart.length>0){
            alert("cart is empty");
        }else if(!(address.name && address.address && address.mobile)){
            alert("Fill the address before place order")
        }else if(!selectedOption.length>0){
            alert("Select a payment methord");
        }
    }
  return (
    <div className='flex  items-center md:items-start flex-col md:flex-row h-[40rem] w-[100%] p-2'>
      <div className='w-[90%] md:w-[70%]'>
      <section>
            <div className='flex justify-center mt-10'>
                <table className='w-[900%]'>
                    <thead>
                        <tr>
                            <th>ITEM</th>
                            <th>NAME</th>
                            <th>QUANTITY</th>
                            <th>PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart && cart.length>0 && cart.map(product=>(
                                <tr key={product.id} className='text-center border-y-2 h-14'>
                                    <td className='flex justify-center'><img className='w-14 h-14' src={product.image && product.image} alt="Product" /></td>
                                    <td>{product.name}</td>
                                    <td className='space-x-2'><span>{product.quantity}</span> </td>
                                    <td>{product.price*product.quantity}</td>
                                </tr>
                            ))
                        }
                        <tr className='text-xl border-y-2 h-14'>
                            <th></th><th></th>
                            <th>TOTAL : </th>
                            <th>₹ {cartTotal}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
      </div>
      <div className=' w-[90%] md:w-[30%] p-10 flex flex-col space-y-10'>
        <div>
        <h1 className='text-2xl font-bold'>Address</h1>
        </div>
        <form className='flex flex-col'>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' value={address.name} onChange={(e)=>handleAddressChange(e)} className='border h-10 rounded-md'/>
            <label htmlFor="address">Address</label>
            <input type="text" name='address' value={address.address} onChange={(e)=>handleAddressChange(e)} className='border h-10 rounded-md'/>
            <label htmlFor="mobile">Mobile</label>
            <input type="number" name='mobile' value={address.mobile} onChange={(e)=>handleAddressChange(e)} className='border h-10 rounded-md'/>
        </form>
        <h1 className='text-2xl font-bold'>Payment methode</h1>
        <form>
            <div>
                <input type="radio" value="EMI" checked={selectedOption === "EMI"} onChange={handleOptionChange} name='paymentMethode' />
                <label htmlFor="paymentMethode"> EMI</label>
            </div>
            <div>
                <input type="radio" value="Upi" checked={selectedOption === "Upi"} onChange={handleOptionChange} name='paymentMethode' />
                <label htmlFor="paymentMethode"> Upi</label>
            </div>
            <div>
                <input type="radio" value="Cash on Delivery" checked={selectedOption === "Cash on Delivery"} onChange={handleOptionChange} name='paymentMethode' />
                <label htmlFor="paymentMethode"> Cash on Delivery</label>
            </div>
        </form>
        <button onClick={()=>handleOnPlaceOrder()} className='bg-black text-white px-10 rounded-md p-2'>Buy Order</button>
      </div>
    </div>
  )
}

export default Payment
