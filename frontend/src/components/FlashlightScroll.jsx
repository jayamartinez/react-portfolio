import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const projects = [
  {
    title: 'Project One',
    description: 'Description for project one.',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Project Two',
    description: 'Description for project two.',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Project Three',
    description: 'Description for project three.',
    image: 'https://via.placeholder.com/150'
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

    console.log('Scroll Position:', scrollPosition);
    console.log('New Index:', newIndex);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project flex items-center py-8 min-h-[50vh] ${
            index === activeIndex ? 'opacity-100' : 'opacity-50'
          }`}

        >
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p>{project.description}</p>
          </div>
          <div className="w-1/2 p-4 flex justify-end max-w-full">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlashlightScroll;