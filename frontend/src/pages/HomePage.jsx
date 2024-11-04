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

                <SkillsList />

                <SkillsList />

                <SkillsList />

                <SkillsList />


                <FlashlightScroll />

                <SkillsList />

                <SkillsList />

                <SkillsList />

                <SkillsList />

                <SkillsList />


            </div>
        </>

    )
}

export default HomePage
