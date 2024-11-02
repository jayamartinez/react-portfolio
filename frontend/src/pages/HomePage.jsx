import React from 'react'
import { useState, useEffect } from 'react';
// import { Navbar } from '../components'
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

const HomePage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [isDarkMode]);

    return (
        <>
            <div>
                <button onClick={toggleTheme}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
                <div className='flex flex-col p-10 px-8 
                sm:py-20 md:py-20 lg:py-40 lg:pt-20 
                mx-auto h-full max-w-3xl justify-between'>
                    <h1 className='font-bold text-3xl py-2'>Jay Martinez</h1>
                    <p className='text-lg py-2'>Full Stack Developer</p>
                    <p className='text-md'>📍 Queens, New York</p>
                    <div className='flex py-2 space-x-4'>
                   
                        <a href="/" download className="flex items-center space-x-2">
                            <FaFileDownload />
                            <span>Resume</span>
                        </a>

                        <a href="https://www.linkedin.com/in/jayamartinez" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>

                        <a href="https://github.com/jayamartinez" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>

                    </div>
                </div>
            </div>
        </>

  )
}

export default HomePage
