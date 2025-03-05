import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaCommentDots, FaEnvelope, FaHome, FaUserTie } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

    const[menuOpen,setMenuOpen]=useState(false)
  return (
    <nav className='fixed top-0 w-full bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-md shadow-lg z-50'>
      <div className='max-w-6xl mx-auto flex justify-between items-center px-8 py-4'>
        <div className='cursor-pointer text-2xl font-bold text-white'>
          Fitlife Gym
        </div>
        {/* Desktop navigation */}
        <div className='hidden md:flex gap-10 items-center text-white font-semibold'>
          <Link
            to='home'
            smooth={true}
            duration={500}
            className='flex items-center hover:text-blue-500 transition-colors duration-300 cursor-pointer gap-2'
          > < FaHome />
            Home
          </Link>
          <Link
            to='trainer'
            smooth={true}
            duration={500}
            className='flex items-center  hover:text-green-500 transition-colors duration-300 cursor-pointer gap-2 '
          > < FaUserTie />
            Trainer
          </Link>
          <Link
            to='opinion'
            smooth={true}
            duration={500}
            className='flex items-center  hover:text-pink-500 transition-colors duration-300 cursor-pointer gap-2'
          > < FaCommentDots />
            Opinions
          </Link>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            className='flex items-center  hover:text-purple-500 transition-colors duration-300 cursor-pointer  gap-2'
          > < FaEnvelope />
            Contact
          </Link>
        </div>

        {/* Mobile view */}
        <button className='md:hidden text-white focus:outline-none ' onClick={()=>setMenuOpen(!menuOpen)} aria-label='Toggle Menu'>
{menuOpen? <IoMdClose/>:<GiHamburgerMenu />}
        </button>
      </div>
      {/* {mobile navigation} */}
      {menuOpen &&(
        <div className='md:hidden bg-gray-800 text-white flex flex-col items-center gap-4 py-4'>
<Link
            to='home'
            smooth={true}
            duration={500}
            className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' onClick={()=>setMenuOpen(false)}
          > 
            Home
          </Link>
          <Link
            to='trainer'
            smooth={true}
            duration={500}
            className='hover:text-green-500 transition-colors duration-300 cursor-pointer' onClick={()=>setMenuOpen(false)}
          > 
            Trainer
          </Link>
          <Link
            to='opinion'
            smooth={true}
            duration={500}
            className='hover:text-pink-500 transition-colors duration-300 cursor-pointer' onClick={()=>setMenuOpen(false)}
          > 
            Opinion
          </Link>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            className='hover:text-purple-500 transition-colors duration-300 cursor-pointer' onClick={()=>setMenuOpen(false)}
          > 
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
