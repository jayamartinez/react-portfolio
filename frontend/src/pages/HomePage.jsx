import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import { Navbar, FlashlightScroll, SkillsList } from '../components'
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

const HomePage = () => {

    return (
        <>
            <Navbar />
            <div>
                <div className='flex flex-col 
                sm:py-20 md:py-20 lg:py-40 lg:pt-20 
                mx-auto h-full max-w-4xl justify-between'>
                    <h1 className='font-bold text-5xl py-2'>Jay Martinez</h1>
                    <p className='text-lg py-2'>Full Stack Developer</p>
                    <p className='text-md'>📍 Queens, New York</p>

                    {/* Links */}
                    <div className='flex py-2 space-x-2'>
                        <div className='card-wrapper h-[40px] w-[100px]'>
                            <a href="/" download 
                            className="flex card-content items-center justify-center space-x-2 p-1">
                                <FaFileDownload />
                                <span>Resume</span>
                            </a>
                        </div>

                        <div className='flex space-x-2 '>
                            <div className='relative h-[40px] w-[100px]'>
                                <a href="https://www.linkedin.com/in/jayamartinez" 
                                target="_blank" rel="noopener noreferrer" 
                                className="flex rounded-md border border-gray-400/20 
                                bg-neutral-900 items-center justify-center
                                space-x-2 p-1 h-[40px] w-[100px]">
                                    <FaLinkedin />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>

                        <a href="https://github.com/jayamartinez" target="_blank" rel="noopener noreferrer" 
                        className="flex rounded-md border border-gray-400/20 
                        bg-neutral-900 items-center justify-center
                        space-x-2 p-1 h-[40px] w-[100px]">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>

                    </div>
                </div>

                <SkillsList />

                <FlashlightScroll />



            </div>
        </>

    )
}

export default HomePage
