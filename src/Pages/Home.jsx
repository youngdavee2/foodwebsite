import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ImageSlide from '../components/ImageSlide'
import Header from '../components/Header'
import FoodsCards from '../components/FoodsCards'
import LoginForm from '../components/LoginForm'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import { LiaTimesSolid } from "react-icons/lia";
const Home = (props) => {
  const [message, setMessage] = useState(false)
  return (
    <div className={`${props.lightMode ? 'bg-black' : 'bg-white'}`}>
        <Header 
        HandleFormChange={props.HandleFormChange}
        userName={props.userName}
        setMessage={setMessage}
        message={message}
        setCartNo={props.setCartNo}
        cartNo={props.cartNo}
        lightMode={props.lightMode}
        setLightMode={props.setLightMode}
        />
        <div className=''>
      <ImageSlide 
      lightMode={props.lightMode}
      setLightMode={props.setLightMode}
      /> 
      </div>
      <FoodsCards 
      cart={props.cart}
      setCart={props.setCart}
      singleProd={props.singleProd}
      setSingleProd={props.setSingleProd}
      setCartNo={props.setCartNo}
        cartNo={props.cartNo}
        lightMode={props.lightMode}
      setLightMode={props.setLightMode}
      />
      <LoginForm 
      form={props.form}
      setForm={props.setForm}
      HandleFormChange={props.HandleFormChange}
      setUserName={props.setUserName}
      userName={props.userName}
      message={message}
      setMessage={setMessage}
      email={props.email}
      setEmail={props.setEmail}
      />
      <Reviews 
      lightMode={props.lightMode}
      setLightMode={props.setLightMode}
      />
      {message ?
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration:1}}
      className='bg-green-600 fixed top-[50px] right-7 rounded-lg p-2 w-[300px] z-40 text-white flex gap-2 items-center'
    >
      You have successfully logged in <div className='cursor-pointer p-1'
       onClick={()=>{
        setMessage(false)
      }}
      ><LiaTimesSolid size={30} className='cursor-pointer'/></div>
    </motion.div>: false
    }
      <Footer />
    </div>
  )
}

export default Home
