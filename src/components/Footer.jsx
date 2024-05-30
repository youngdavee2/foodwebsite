import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='py-8 lg:py-12'>
      <div className='lg:flex justify-between p-3 lg:p-0 items-center border-t-2 border-white'>
        <div className='w-full lg:w-auto flex flex-col gap-3 items-center lg:items-start'>
          <h1 className='text-white text-xl lg:text-lg'>Connect with us on social media:</h1>
          <div className='text-white flex gap-3 p-2'>
            <div className='hover:text-orange-600 cursor-pointer'><FaFacebook size={24}/></div>
            <div className='hover:text-orange-600 cursor-pointer'><FaTwitter size={24}/></div>
            <div className='hover:text-orange-600 cursor-pointer'><FaInstagram size={24}/></div>
            <div className='hover:text-orange-600 cursor-pointer'><FaYoutube size={24}/></div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-2'>
          <input type="text" placeholder='Subscribe' className='text-white rounded-lg bg-transparent border-2 border-white p-2'/>
          <button className='text-white text-lg border-2 border-white p-2 rounded-lg hover:bg-white hover:text-black'>Subscribe</button>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 text-white mt-4 lg:mt-6'>
        <span>Download our mobile app</span>
        <span>Call us: +1 (123) 456-7890</span>
        <span>Read our FAQ</span>
      </div>
    </div>
  )
}

export default Footer;
