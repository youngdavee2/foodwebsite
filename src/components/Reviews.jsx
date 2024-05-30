import React from 'react';
import { IoMdStar } from "react-icons/io";
import { motion } from 'framer-motion';
const Reviews = (props) => {
  return (
    <div className="p-4 lg:p-8">
      <label className={`${props.lightMode ? 'text-white': 'text-black'} text-3xl font-bold`}>Testimonials</label>
      <div className='flex flex-col align-center gap-4 w-[300px] mt-4 lg:mt-6'>
        <h1 className={`${props.lightMode ? 'text-white': 'text-black'} text-xl`}>Ratings</h1>
        <div className='text-orange-600 flex gap-3 items-center'><h1 className={`${props.lightMode ? 'text-white': 'text-black'} text-xl`}>10,567</h1><IoMdStar size={30}/><IoMdStar size={30}/><IoMdStar size={30}/><IoMdStar size={30}/></div>
        <div className='text-orange-600 flex gap-3 items-center'><h1 className={`${props.lightMode ? 'text-white': 'text-black'} text-xl`}>1,567</h1><IoMdStar size={30}/><IoMdStar size={30}/><IoMdStar size={30}/></div>
        <div className='text-orange-600 flex gap-3 items-center'><h1 className={`${props.lightMode ? 'text-white': 'text-black'} text-xl`}>67</h1><IoMdStar size={30}/><IoMdStar size={30}/></div>
        <div className='text-orange-600 flex gap-3 items-center'><h1 className={`${props.lightMode ? 'text-white': 'text-black'} text-xl`}>5</h1><IoMdStar size={30}/></div>
      </div>
      <div className='lg:flex lg:items-center justify-center mt-6 lg:mt-8 grid gap-4 lg:grid-cols-2'>
        <motion.div
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5}}
        className={`${props.lightMode ? 'border-white border-2' : 'border-black border-2'} p-3 lg:w-[400px] lg:h-[200px] w-full flex gap-2 items-center  `}>
          <img src="https://cdn.pixabay.com/photo/2019/05/07/12/54/girl-4185917_640.jpg" alt="" className='w-16 h-16 lg:w-20 lg:h-20 rounded-full'/>
          <h1 className={`${props.lightMode ? 'text-white' : 'text-black'}`}>The menu is well-organized and easy to browse, allowing users to quickly find the items they're looking for.</h1>
        </motion.div>
        <motion.div 
        initial={{opacity:0,y:60}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        className={`${props.lightMode ? 'border-white border-2' : 'border-black border-2'} p-3 lg:w-[400px] lg:h-[200px] w-full flex gap-2 items-center  `}>
          <img src="https://cdn.pixabay.com/photo/2021/01/04/07/33/man-5886719_640.jpg" alt="" className='w-16 h-16 lg:w-20 lg:h-20 rounded-full'/>
          <h1 className={`${props.lightMode ? 'text-white' : 'text-black'}`}>Placing orders is straightforward, with clear prompts for selecting items, customizing options (if available), and adding them to the cart.</h1>
        </motion.div>
        <motion.div 
        initial={{opacity:0,y:70}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.7}}
        className={`${props.lightMode ? 'border-white border-2' : 'border-black border-2'} p-3 lg:w-[400px] lg:h-[200px] w-full flex gap-2 items-center  `}>
          <img src="https://cdn.pixabay.com/photo/2020/03/16/06/36/wait-for-a-call-4935894_640.jpg" alt="" className='w-16 h-16 lg:w-20 lg:h-20 rounded-full'/>
          <h1 className={`${props.lightMode ? 'text-white' : 'text-black'}`}>I recently tried out the delivery food app, and I must say, it exceeded my expectations in both taste and convenience</h1>
        </motion.div>
        <motion.div 
        initial={{opacity:0,y:80}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        className={`${props.lightMode ? 'border-white border-2' : 'border-black border-2'} p-3 lg:w-[400px] lg:h-[200px] w-full flex gap-2 items-center  `}>
          <img src="https://cdn.pixabay.com/photo/2020/01/24/08/43/redhead-4789668_640.jpg" alt="" className='w-16 h-16 lg:w-20 lg:h-20 rounded-full'/>
          <h1 className={`${props.lightMode ? 'text-white' : 'text-black'}`}> Each dish was expertly prepared, bursting with flavor, and delivered piping hot right to my doorstep.</h1>
        </motion.div>
      </div>
      <div class="bg-gray-800 border border-slate-700 grid grid-cols-6 gap-2 rounded-xl mt-5 p-2 text-sm">
    <h1 class="text-center text-white text-xl font-bold col-span-6">Send Feedback</h1>
    <textarea class="bg-transparent text-white h-28 placeholder:text-slate-300 placeholder:opacity-50 border border-slate-600 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-300" placeholder="Your feedback..."></textarea>
    <button class="fill-slate-300 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-700 hover:border-slate-300 focus:fill-blue-200 focus:bg-blue-600 border border-slate-600">
<svg viewBox="0 0 512 512" height="20px" xmlns="http://www.w3.org/2000/svg">
<path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
</svg>
</button>
    <button class="fill-slate-300 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-700 hover:border-slate-300 focus:fill-blue-200 focus:bg-blue-600 border border-slate-600">
            <svg viewBox="0 0 512 512" height="20px" xmlns="http://www.w3.org/2000/svg">
<path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>
        </button>
    <span class="col-span-2"></span>
    <button class="col-span-2 stroke-slate-300 bg-gray-800 focus:stroke-blue-200 focus:bg-blue-600 border border-slate-600 hover:border-slate-300 rounded-lg p-2 duration-300 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                <path d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M10.11 13.6501L13.69 10.0601" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>

</div>
    </div>
  );
};

export default Reviews;
