import React from 'react'
import { useState, useEffect } from 'react';
import { Navbar } from '../components'
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

const HomePage = () => {
    const skills = [
        { name: "JavaScript", description: "Coding Language", icon: "./JavaScript.png", color: "#ebda51" },
        { name: "React", description: "Frontend Library", icon: "./React.png", color: "#3178C6" },
        { name: "Tailwind", description: "CSS Framework", icon: "./Tailwind.png", color: "#61DAFB" },
        { name: "Git", description: "Version Control", icon: "./Git.png", color: "#c74e40" },
        { name: "MongoDB", description: "Database", icon: "./mongodb.svg", color: "#69a042" },
        { name: "NodeJS", description: "JS Runtime", icon: "./nodebig.png", color: "#5b9141" },
        { name: "ExpressJS", description: "Backend Tool", icon: "./expressjs.webp", color: "#9c9c9c" },
        { name: "Python", description: "Coding Language", icon: "./Python.webp", color: "#e8bc27" },
    ];

    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const [isVisible, setIsVisible] = useState(false);

    const onVisibilityChange = (visible) => {
        if (visible) {
        setIsVisible(true); // Only set to true once
        }
    };

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

                <div className="flex items-start justify-center p-2">
                <div className="max-w-4xl mx-auto text-left">
                    <h1 className="text-3xl font-bold mb-2">Skills</h1>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-col items-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-neutral-900 border border-neutral-900 hover:bg-neutral-800 hover:border-gray-400/20 transition-colors 
                        duration-200 rounded-lg p-3 w-56 flex items-center space-x-4 ">

                        <div className={`text-3xl w-10 h-10 object-contain flex items-center justify-center rounded-lg p-2`}
                        style={{ backgroundColor: `${skill.color}33` }}>
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold">{skill.name}</h3>
                            <p className="text-zinc-500 truncate">{skill.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>

                <div className="flex items-start justify-center p-2">
                <div className="max-w-4xl mx-auto text-left">
                    <h1 className="text-3xl font-bold mb-2">Skills</h1>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-col items-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-neutral-900 border border-neutral-900 hover:bg-neutral-800 hover:border-gray-400/20 transition-colors 
                        duration-200 rounded-lg p-3 w-56 flex items-center space-x-4 ">

                        <div className={`text-3xl w-10 h-10 object-contain flex items-center justify-center rounded-lg p-2`}
                        style={{ backgroundColor: `${skill.color}33` }}>
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold">{skill.name}</h3>
                            <p className="text-zinc-500 truncate">{skill.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>

                <div className="flex items-start justify-center p-2">
                <div className="max-w-4xl mx-auto text-left">
                    <h1 className="text-3xl font-bold mb-2">Skills</h1>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-col items-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-neutral-900 border border-neutral-900 hover:bg-neutral-800 hover:border-gray-400/20 transition-colors 
                        duration-200 rounded-lg p-3 w-56 flex items-center space-x-4 ">

                        <div className={`text-3xl w-10 h-10 object-contain flex items-center justify-center rounded-lg p-2`}
                        style={{ backgroundColor: `${skill.color}33` }}>
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold">{skill.name}</h3>
                            <p className="text-zinc-500 truncate">{skill.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>

                <div className="flex items-start justify-center p-2">
                <div className="max-w-4xl mx-auto text-left">
                    <h1 className="text-3xl font-bold mb-2">Skills</h1>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-col items-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-neutral-900 border border-neutral-900 hover:bg-neutral-800 hover:border-gray-400/20 transition-colors 
                        duration-200 rounded-lg p-3 w-56 flex items-center space-x-4 ">

                        <div className={`text-3xl w-10 h-10 object-contain flex items-center justify-center rounded-lg p-2`}
                        style={{ backgroundColor: `${skill.color}33` }}>
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold">{skill.name}</h3>
                            <p className="text-zinc-500 truncate">{skill.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>

                <div className="flex items-start justify-center p-2">
                <div className="max-w-4xl mx-auto text-left">
                    <h1 className="text-3xl font-bold mb-2">Skills</h1>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-col items-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-neutral-900 border border-neutral-900 hover:bg-neutral-800 hover:border-gray-400/20 transition-colors 
                        duration-200 rounded-lg p-3 w-56 flex items-center space-x-4 ">

                        <div className={`text-3xl w-10 h-10 object-contain flex items-center justify-center rounded-lg p-2`}
                        style={{ backgroundColor: `${skill.color}33` }}>
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold">{skill.name}</h3>
                            <p className="text-zinc-500 truncate">{skill.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>

                <div className="flex items-start justify-center p-2">
                <div className="max-w-4xl mx-auto text-left">
                    <h1 className="text-3xl font-bold mb-2">Skills</h1>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-col items-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-neutral-900 border border-neutral-900 hover:bg-neutral-800 hover:border-gray-400/20 transition-colors 
                        duration-200 rounded-lg p-3 w-56 flex items-center space-x-4 ">

                        <div className={`text-3xl w-10 h-10 object-contain flex items-center justify-center rounded-lg p-2`}
                        style={{ backgroundColor: `${skill.color}33` }}>
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold">{skill.name}</h3>
                            <p className="text-zinc-500 truncate">{skill.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>

                <div className="flex items-start justify-center p-2">
                <div className="max-w-4xl mx-auto text-left">
                    <h1 className="text-3xl font-bold mb-2">Skills</h1>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-col items-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-neutral-900 border border-neutral-900 hover:bg-neutral-800 hover:border-gray-400/20 transition-colors 
                        duration-200 rounded-lg p-3 w-56 flex items-center space-x-4 ">

                        <div className={`text-3xl w-10 h-10 object-contain flex items-center justify-center rounded-lg p-2`}
                        style={{ backgroundColor: `${skill.color}33` }}>
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold">{skill.name}</h3>
                            <p className="text-zinc-500 truncate">{skill.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>

                

            </div>
        </>

    )
}

export default HomePage
