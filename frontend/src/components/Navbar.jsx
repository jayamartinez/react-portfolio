import React, { useState } from 'react'
import { FaBars, FaBookOpen, FaBriefcase, FaHome, FaTimes } from 'react-icons/fa'
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <div className='fixed top-0 left-0 w-full z-50 flex justify-center items-center mt-2'>
      <div className='border backdrop-blur-md bg-neutral-900/20 border-gray-400/20 rounded-2xl p-3 space-x-8 flex flex-row'>
        
        <Link to={"/"} className='flex items-center space-x-2 hover:scale-105 transition-transform duration-200'>
          <FaHome />
          <span className='hidden md:block'>Home</span>
        </Link>
        
        <Link to={"/projects"} className='flex items-center space-x-2 hover:scale-105 transition-transform duration-200'>
          <FaBriefcase />
          <span className='hidden md:block'>Projects</span>
        </Link>
        
        <Link to={"/blog"} className='flex items-center space-x-2 hover:scale-105 transition-transform duration-200'>
          <FaBookOpen />
          <span className='hidden md:block'>Blog</span>
        </Link>

        {/* <a href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
          <FaHome />
          <span className='hidden md:block'>Home</span>
        </a>
        <a href="/projects" rel="noopener noreferrer" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
          <FaBriefcase />
          <span className='hidden md:block'>Projects</span>
        </a>
        <a href="/blog" rel="noopener noreferrer" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
          <FaBookOpen />
          <span className='hidden md:block'>Blog</span>
        </a> */}
      </div>
    </div>
    
    {/* Mobile Menu */}
    {/* <div 
    className='md:hidden fixed flex flex-row top-0 right-0 
    items-start justify-end border backdrop-blur-md 
    bg-neutral-900/20 border-gray-400/20 
    rounded-xl p-2 m-4'>
      <button onClick={toggleMenu} className='text-white z-50'>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div
      className={`fixed border rounded-lg backdrop-blur-md 
      bg-neutral-900/20 border-gray-400/20 p-4 flex flex-col space-y-2 
      md:hidden transition-transform duration-300 
      ${isMenuOpen ? 'scale-100' : 'scale-0'} origin-top-right`}
      >
        <a href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200 text-white">
          <FaHome />
          <span>Home</span>
        </a>
        <a href="/projects" rel="noopener noreferrer" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200 text-white">
          <FaBriefcase />
          <span>Projects</span>
        </a>
        <a href="/blog" rel="noopener noreferrer" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200 text-white">
          <FaBookOpen />
          <span>Blog</span>
        </a>
      </div>
    </div> */}

    </>

  )
}

export default Navbar
