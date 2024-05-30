import React from 'react'
import  Delivery  from '../assest/DeliveryGuy'
const Checkout = (props) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black'>
      <div className='flex flex-row items-center justify-center h-full border-2 border-white p-3'>
      <div>
        <div className='flex flex-col gap-4'>
        <span className='text-orange-600 font-bold text-3xl'>WE ARE ON OUR WAY</span>
        <span className='text-orange-600 font-bold text-3xl'>{`total: $${props.total}`}</span>
        </div>
        <img src={Delivery} alt="" className='lg:h-[400px] h-[200px]'/>
      </div>
      <div className='flex flex-col gap-2 text-white w-[400px] p-3 items-center justify-center'>
        <label>Enter Zip code</label>
          <input type="text" placeholder='ZIP CODE' className='p-2 rounded-lg w-full text-black'/>
        <label>Enter Country</label>
          <input type="text" placeholder='COUNTRY' className='p-2 rounded-lg w-full text-black'/>
        <label>Enter number</label>
          <input type="text" placeholder='PHONE' className='p-2 rounded-lg w-full text-black'/>
        <label>Enter Address</label>
          <input type="text" placeholder='ADDRESS' className='p-2 rounded-lg w-full text-black'/>
        <label>Enter second address</label>
          <input type="text" placeholder='ADDRESS 2' className='p-2 rounded-lg w-full text-black'/>
        <label>Enter other number</label>
        <input type="text" placeholder='PHONE NUMBER 2' className='p-2 rounded-lg w-full text-black'/>
        <label>enter payment method</label>
        <div className='flex gap-4 h-[30px]'>
          <span className='flex '>Debit or credit card</span>
          <input type="checkbox" className='p-2 rounded-lg w-full'/>
          <span>paypal</span>
          <input type="checkbox" className='p-2 rounded-lg w-full'/>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Checkout
