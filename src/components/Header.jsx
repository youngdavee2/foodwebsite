import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";

const Header = (props) => {
  return (
    <div className={`${props.lightMode ? 'bg-black' : 'bg-white'} w-full absolute left-0 top-0 z-10 `}>
      <div className='w-full flex gap-3 lg:gap-4 p-3 lg:justify-center justify-end items-center lg:mt-0'>
        <Link to='/'><h1 className='lg:text-2xl text-orange-600 lg:font-bold'>DAVEATS</h1></Link>
        <Link to='/Search'><input type="text" placeholder='Search...'
        className={`p-2 rounded-full md:flex lg:flex hidden ${props.lightMode ? 'bg-transparent border-b-2 border-white' : 'bg-white border-black border-2'}  w-[200px] lg:w-[400px]  `}
        /></Link>
        <Link to='/Search'><div className={`${props.lightMode ? 'text-white' : 'text-black'} lg:hidden md:hidden flex`}><IoSearchSharp size={30}/></div></Link>
        <button className='text-white bg-orange-600 p-2 rounded-lg'
        onClick={props.HandleFormChange}
        >{props.userName ? props.userName : 'Log In'}</button>
        <Link to='/Order'><button className='text-white bg-orange-600 p-3 flex rounded-lg'><FaCartShopping /><sup>{props.cartNo}</sup></button></Link>
      </div>
    </div>
  )
}

export default Header
