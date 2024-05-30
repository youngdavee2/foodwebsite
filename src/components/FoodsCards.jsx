import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { LiaTimesSolid } from "react-icons/lia";
import { FoodsPizza } from './FoodsCartdata'
import { FoodsBurger } from './FoodsCartdata'
import { FoodsChicken } from './FoodsCartdata'
import { SeaFoods } from './FoodsCartdata'
import './foodcards.css'
const FoodsCards = (props) => {
    const [successMessage, setSuccessMessage] = useState('');
  return (
    <div className='lg:ml-[20px]'>
        {/* the pizza section */}
        <h1 className={`${props.lightMode ? 'text-white ' : 'text-black'} text-2xl font-bold `}>Our Best Pizza</h1>
        <motion.div
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1}}
            >
                <div className=' grid grid-cols-2 gap-2 lg:flex lg:gap-4 p-2'>
        {FoodsPizza.map((foods)=>(
            
              
              <div id='food-pizza' key={foods.id} className='food-pizza flex gap-2 rounded-lg relative lg:w-[310px] hover:scale-105 transition duration-500 cursor-pointer'>            
                  <img src={foods.url} alt=""className='lg:w-[300px] rounded-lg'/>
                  <div className='absolute group rounded-lg bg-black/45 w-full lg:w-[300px] transition duration-500 h-full items-center justify-center text-white flex flex-col'>
                      <h1 className='text-white lg:text-2xl font-bold' >{foods.desc}</h1>
                      <button className='p-2 hover:bg-white hover:text-orange-600 hover:border-black hover:border-2 transition duration-500 lg:hidden lg:group-hover:flex text-white bg-orange-600 rounded-full'
                      onClick={()=>{
                        props.setSingleProd(foods)
                        props.setCart([...props.cart, foods])
                        props.setCartNo(props.cartNo + 1)
                        setSuccessMessage(`You have successfully purchased ${foods.desc}`);
                      }}
                      >{` $${foods.Price}`}</button>
                  </div>
              </div>
        ))
      }
      </div>
      </motion.div>
      {/* the burger section */}
      <motion.div
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1}}
      >
        <h1 className={`${props.lightMode ? 'text-white ' : 'text-black'} text-2xl font-bold`}>Our Best Burger</h1>
        <div className=' grid grid-cols-2 gap-2 lg:flex lg:gap-4 p-2'>{
            FoodsBurger.map((burger)=>(
                <div id='burger' className='flex gap-2 relative lg:w-[310px] hover:scale-105 transition duration-500 cursor-pointer'>            
            <img src={burger.url} alt=""className='lg:w-[300px] rounded-lg'/>
            <div className='absolute group bg-black/40 rounded-lg w-full lg:w-[300px] transition duration-500 h-full items-center justify-center text-white flex flex-col lg:gap-2 gap-1'>
                <h1 className='text-white font-bold lg:text-2xl p-2 cursor-pointer'>{burger.desc}</h1>
                <button 
                onClick={()=>{
                    props.setSingleProd(burger)
                    props.setCart([...props.cart, burger])
                    props.setCartNo(props.cartNo + 1)
                    setSuccessMessage(`You have successfully purchased ${burger.desc}`);
                  }}
                className='p-2 text-white bg-orange-600 rounded-full cursor-pointer hover:bg-white hover:text-orange-600 transition duration-500 hover:border-black hover:border-2 lg:hidden lg:group-hover:flex'>{`$${burger.Price}`}</button>
            </div>
        </div>
            ))
        }
        
        </div>
      </motion.div>
      {/* the chicken section */}
      <motion.div
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1}}
      >
        <h1 className={`${props.lightMode ? 'text-white ' : 'text-black'} text-2xl font-bold`}>Our Best Roasted chicken</h1>
        <div className=' grid grid-cols-2 gap-2 lg:flex lg:gap-4 p-2'>
            {FoodsChicken.map((chicks)=>(
                <div id='chicken' className='flex gap-2 relative rounded-lg lg:w-[310px] hover:scale-105 transition duration-500 cursor-pointer'>            
                <img src={chicks.url} alt=""className='lg:w-[300px] rounded-lg'/>
                <div className='absolute group  bg-black/40 rounded-lg w-full lg:w-[300px] transition duration-500 h-full items-center justify-center text-white flex flex-col lg:gap-2 gap-1'>
                    <h1 className='text-white font-bold lg:text-2xl p-2'>{chicks.desc}</h1>
                    <button 
                    onClick={()=>{
                        props.setSingleProd(chicks)
                        props.setCart([...props.cart, chicks])
                        props.setCartNo(props.cartNo + 1)
                        setSuccessMessage(`You have successfully purchased ${chicks.desc}`);
                      }}
                    className='p-2 text-white bg-orange-600 rounded-full cursor-pointer hover:bg-white hover:text-orange-600 hover:border-black transition duration-500 hover:border-2 lg:hidden lg:group-hover:flex'>{` $${chicks.Price}`}</button>
                </div>
            </div>
            ))    
        }
        </div>
      </motion.div >
      {/* the sea foods section */}
      <motion.div
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1}}
      >
        <h1 className={`${props.lightMode ? 'text-white ' : 'text-black'} text-2xl font-bold`}>Our Best Sea foods</h1>
        <div className=' grid grid-cols-2 gap-2 lg:flex lg:gap-4 p-2'>{
            SeaFoods.map((sea)=>(
                <div id='sea-food' className='flex gap-2 relative lg:w-[310px] rounded-lg hover:scale-105 transition duration-500 cursor-pointer'>            
                <img src={sea.url} alt=""className='lg:w-[300px] rounded-lg'/>
                <div className='absolute group bg-black/40 rounded-lg w-full lg:w-[300px] transition duration-500 h-full items-center justify-center text-white flex flex-col lg:gap-2 gap-1'>
                    <h1 className='text-white font-bold text-xl lg:text-2xl p-2'>{sea.desc}</h1>
                    <button 
                    onClick={()=>{
                        props.setSingleProd(sea)
                        props.setCart([...props.cart, sea])
                        props.setCartNo(props.cartNo + 1)
                        setSuccessMessage(`You have successfully purchased ${sea.desc}`);
                      }}
                    className='p-2 text-white bg-orange-600 rounded-full cursor-pointer hover:bg-white hover:text-orange-600 hover:border-black hover:border-2 transition duration-500 lg:hidden lg:group-hover:flex'
                    >{`$${sea.Price}`}</button>
                </div>
            </div>
            ))
        }
      </div>
      </motion.div>
      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className='fixed top-5 right-5 flex gap-3 z-50 bg-green-600 p-2 rounded-lg text-white'
        >
          {successMessage} <LiaTimesSolid size={30}
          onClick={()=>{
            setSuccessMessage(false)
          }}
          className='cursor-pointer'
          />
        </motion.div>
      )}
    </div>
  )
}

export default FoodsCards
