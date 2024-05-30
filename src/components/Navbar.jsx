import React, { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { LiaTimesSolid } from "react-icons/lia";
import { FaHome } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';
const Navbar = (props) => {
  const NavList = [
    { id: 1, name: 'Home', icon:<FaHome /> , path:'/'},
    { id: 2, name: 'Order', icon : <FaTruck /> , path:'/Order'},
    { id: 3, name: 'Profile', icon :<FaUser />, path:'/Profile'},
    { id: 4, name: 'To-Go', icon :<FaWalking /> , path:''},
    { id: 5, name: 'Setting', icon :<IoSettings /> , path:'/setting'},
    { id: 6, name: 'switch modes', icon : props.lightMode ? <CiLight /> :<MdDarkMode /> }
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`${isOpen ? "fixed top-3 lg:top-[30px] left-4 z-30 cursor-pointer " : "text-white absolute top-2 left-3 lg:top-[40px] lg:left-20 z-30 cursor-pointer"}
        
        `}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <LiaTimesSolid size={30}/> : <HiOutlineMenuAlt1 size={30} className={`${props.lightMode ? '' : 'text-black'}`}/>}
      </div>
      {isOpen && (
        <>
        <div className="fixed top-0 left-0 z-20 w-full h-full bg-black opacity-50" 
        onClick={()=>{
          setIsOpen(false)
        }}
        />
        <AnimatePresence>
        <motion.div 
        initial={{x:-100}}
        whileInView={{x:0}}
        exit={{x:-100}}
        transition={{duration: 0.6}}
        
        className={`fixed top-0 left-0 z-20 border-r-2  border-black flex flex-col items-center w-64 h-full  bg-white`}>
        {NavList.map((item) => (
  <div className='mt-[50px] w-full' key={item.id}>
    {item.id === 6 ? (
      <div className="w-full py-3 flex gap-2 items-center justify-center lg:font-bold  text-center text-lg cursor-pointer hover:underline"
        onClick={() => {
          // Handle click event for the 6th item
          props.setLightMode(!props.lightMode)
          setIsOpen(false);
        }}
      >
        {item.name}
        <span className='lg:text-2xl'>{item.icon}</span>
      </div>
    ) : (
      <Link to={item.path}
        className="w-full py-3 flex gap-2 items-center justify-center lg:font-bold  text-center text-lg cursor-pointer hover:underline"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {item.name}
        <span className='lg:text-2xl'>{item.icon}</span>
      </Link>
    )}
  </div>
))}
        </motion.div>
        </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default Navbar;
