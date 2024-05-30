import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Checkout from '../components/Checkout';

const Order = (props) => {
  const [checkout, setCheckOut] = useState(false)
  
  const handleDelete = (index) => {
    const updatedCart = [...props.cart];
    updatedCart.splice(index, 1); // Remove the item at the specified index
    Math.floor(updatedCart)
    props.setCart(updatedCart); // Update the cart state
    props.setCartNo(props.cartNo - 1)
  };
  const handleCheckout = () =>{
    setCheckOut(true)
  }
  let total = 0
  const calculateTotal = () => {
    props.cart.forEach((item) => {
      total = total + item.Price
    });
    return total;
  };
  
  return (
    props.userName ? 
    <div className={`${props.lightMode ? 'bg-black' : 'bg-white'} h-full py-6`}>
      <div className='ml-[50px] p-2 lg:p-3 md:ml-[90px] lg:ml-[100px] mt-[100px] grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-2  items-center justify-center'>
        {
          props.cart.map((item, index) => (
            <div key={index} className='bg-white rounded-lg shadow-lg mb-4 w-64 p-4'>
              <img src={item.url} alt="" className='h-32 w-full object-cover mb-2' />
              <p className='text-gray-800 font-bold text-lg'>{item.desc}</p>
              <p className='text-gray-600'>{`Price: $${item.Price}`}</p>
              <button
                className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-2 rounded-md'
                onClick={()=>handleDelete(index)}
              >
                Delete
              </button>
            
            </div>
          ))
        }
        {props.cart.length === 0 && <p className={`${props.lightMode ? 'text-white': 'text-black border-b-2 border-black shadow-lg shadow-black'} w-full p-4 flex text-center items-center`}>Your cart is empty.</p>}
        
      </div>
     {props.cart.length > 0 && (
          <div className="text-white mt-4">
            <p>{`Total Price: $${calculateTotal()} `}</p>
            <button className='bg-red-400 p-3 rounded-lg lg:w-[400px] w-[300px] hover:opacity-45'
            onClick={handleCheckout}
            >{`check out:$${total} `}</button>
          </div>
        )} 
        {checkout && <Checkout 
      setCheckOut={setCheckOut}
      total={total}
      />}
    </div>
  : <div className={`${props.lightMode ? 'bg-black' : ''} h-[100vh] flex flex-col lg:gap-4 gap-3 items-center justify-center`}>
    <img src="https://images.pexels.com/photos/13669074/pexels-photo-13669074.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" 
    className={`${props.lightMode ? 'border-white border-2': 'border-black border-2'} h-[400px]   rounded-lg`}/>
    <h1 className='text-orange-600'>you have not signed in your account</h1><Link to='/'><button className='text-white hover:text-orange-600 p-3 rounded-lg border-white border-2'>Go and Login</button></Link></div>
  );
};

export default Order;
