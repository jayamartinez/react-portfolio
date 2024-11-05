import React, { useState, useEffect } from 'react';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

const projects = [
  {
    title: 'Netflix Clone',
    description: `• Netflix Clone built with the MERN techstack.
                  • Gained a deeper understanding of React.
                  • First time working with MongoDB and Express.
                  • Learned how to integrate third-party APIs 
                    better.`,

    link: 'https://netflix-clone-zoft.onrender.com/',
    image: './netflix-clone.gif',
    source: 'https://github.com/jayamartinez/netflix-clone'
  },
  {
    title: 'YouTube Transcript & TTS Automation',
    description: `• Automated YouTube transcript downloads with the YouTube Data API.
                  • Integrated Eleven Labs AI TTS for audio conversion.
                  • Streamlined workflow for scalable audio content creation.
                  `,
    link: 'https://www.google.com',
    image: 'https://via.placeholder.com/1920x1080',
    source: 'https://www.google.com'
  },
  {
    title: 'Project Three',
    description: `Description for project three.\nYet another line.`,
    link: 'https://www.google.com',
    image: 'https://via.placeholder.com/1920x1080',
    source: 'https://www.google.com'
  }
];

const FlashlightScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const projectElements = document.querySelectorAll('.project');
    let newIndex = 0;

    projectElements.forEach((element, index) => {
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;

      if (scrollPosition >= elementTop - viewportHeight * 0.3) {
        newIndex = index;
      }
    });
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project flex items-start py-16 min-h-[40vh] transition-opacity duration-300 ${
            index === activeIndex ? 'opacity-100' : 'opacity-50'
          }`}
        >
          <div className="w-1/2 p-8">
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <p className='mt-2 whitespace-pre-line'>{project.description}</p>
          </div>
          <div className='h-full w-1/2 p-4 flex flex-col justify-between border bg-neutral-800 border-gray-400/20 rounded-lg'>
            <div className="w-full h-full object-cover p-2 max-w-full">
              <img src={project.image} alt={project.title} className='w-full h-full object-contain rounded-md'/>
            </div>

            <div className='flex flex-row space-x-2 p-2'>

              <div className='card-wrapper h-[40px] w-[100px]'>
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                className="flex card-content items-center justify-center space-x-1 p-1">
                    <GoDotFill />
                    <span>Live</span>
                </a>
              </div>

              <div className='card-wrapper h-[40px] w-[100px]'>
                <a href={project.source} target="_blank" rel="noopener noreferrer"
                className="flex card-content items-center justify-center space-x-1 p-1">
                    <FaFolderOpen />
                    <span>Source</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default FlashlightScroll;