import React from 'react'
import { FaBookOpen, FaBriefcase, FaGithub, FaHome, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    
    <div className='fixed top-0 left-0 w-full z-50 flex justify-center items-center mt-2'>
        <div className='border backdrop-blur-md bg-neutral-900/20 border-gray-400/20 rounded-xl p-3 space-x-8 flex flex-row'>
        
            <a href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
                    <FaHome />
                    <span>Home</span>
            </a>

            <a href="/projects" rel="noopener noreferrer" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
                <FaBriefcase />
                <span>Projects</span>
            </a>

            <a href="/blog" rel="noopener noreferrer" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
                <FaBookOpen />
                <span>Blog</span>
            </a>

        </div>
    </div>

  )
}

export default Navbar
