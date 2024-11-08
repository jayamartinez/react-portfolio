import React, { useState, useEffect } from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

const projects = [
  {
    title: 'Netflix Clone',
    description: `• Netflix Clone built with the MERN techstack.
                  • Gained a deeper understanding of React.
                  • First time working with MongoDB and Express.
                  • Learned how to integrate third-party APIs 
                    better.`,
    technologies: ['React', 'NodeJS', 'Express', 'MongoDB'],
    link: 'https://netflix-clone-zoft.onrender.com/',
    image: './netflix-clone.gif',
    source: 'https://github.com/jayamartinez/netflix-clone'
  },
  {
    title: 'YouTube Transcript & TTS Automation',
    description: `• Automated YouTube transcript downloads with the \nYouTube Data API.
                  • Integrated Eleven Labs AI TTS for audio conversion.
                  • Streamlined workflow for scalable audio content \ncreation.
                  `,
    technologies: ['Python', 'Eleven Labs AI API'],
    link: 'https://www.google.com',
    image: 'https://via.placeholder.com/1920x1080',
    source: 'https://www.google.com'
  },
  {
    title: 'Project Three',
    description: `Description for project three.\nYet another line.`,
    technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
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

      if (scrollPosition >= elementTop - viewportHeight * 0.55) {
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
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-center">
      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project flex flex-col items-start pt-16 min-h-[40vh] transition-opacity duration-300 ${
              index === activeIndex ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <div className="w-full p-8">
              <h2 className="text-xl md:text-3xl font-bold">{project.title}</h2>
              <p className='mt-2 whitespace-pre-line'>{project.description}</p>
            </div>

            <div className='flex flex-row space-x-2 p-8'>
              {project.technologies.map((tech, index) => (
                <p key={index} className="mb-2 w-fit lg:self-start right-10 rounded-md 
                border-[0.5px] border-gray-400/20 bg-neutral-800 px-1.5 
                py-1 text-[#9A9A9A] text-xs">
                    {tech}    
                </p>
              ))}

            </div>
            <div className='h-3/4 w-3/4 p-2 flex flex-col 
            justify-center mx-auto border bg-neutral-800 
            border-gray-400/20 rounded-lg lg:hidden
            hover:cursor-pointer transition-transform duration-300 hover:scale-105'>

              <div className=''>
                <div className="w-full h-full object-cover p-2 max-w-full">
                  <img src={project.image} alt={project.title} className='w-full h-full object-contain rounded-md'/>
                </div>

                <div className='flex flex-row space-x-2 p-2'>

                  <div className='card-wrapper h-[40px] w-[100px]'>
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="flex card-content items-center justify-center space-x-1 p-1">
                        <GoDotFill className='animate-pulse'/>
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
            
          </div>
        ))}
      </div>

    {/* Scroll Preview */}
    <div className='h-full w-1/2 p-2 hidden lg:flex flex-col 
    justify-center mx-auto border bg-neutral-800 
    border-gray-400/20 rounded-lg sticky top-[25%]
    hover:cursor-pointer transition-transform duration-300 hover:scale-105'>

        <div className=''>
          <div className="w-full h-72 object-cover rounded-md p-2 max-w-full">
            <img src={projects[activeIndex].image} alt={projects[activeIndex].title} className='w-full h-full object-cover rounded-md'/>
          </div>

          <div className='flex flex-row space-x-2 p-2'>

            <div className='card-wrapper h-[40px] w-[100px]'>
              <a href={projects[activeIndex].link} target="_blank" rel="noopener noreferrer"
              className="flex card-content items-center justify-center space-x-1 p-1">
                  <GoDotFill className='text-red-600 animate-pulse' />
                  <span>Live</span>
              </a>
            </div>

            <div className='card-wrapper h-[40px] w-[100px]'>
              <a href={projects[activeIndex].source} target="_blank" rel="noopener noreferrer"
              className="flex card-content items-center justify-center space-x-1 p-1">
                  <FaFolderOpen />
                  <span>Source</span>
              </a>
            </div>

          </div>
        </div>
        

    </div>

      {/* <div className='relative w-1/2 p-2 flex flex-col justify-center mx-auto'>
        {projects.map((project, index) => (
          <img
            key={index}
            src={project.image}
            alt={project.title}
            className={`absolute top-0 left-0 w-full h-full object-contain rounded-md transition-opacity duration-300 ${
              index === activeIndex ? 'block' : 'hidden'
            }`}
          />
        ))}
      </div> */}

    </div>
  );
};

export default FlashlightScroll;