import { useState } from "react";
import SkillCard from "./SkillCard"

const SkillsList = () => {

    const [showAllSkills, setShowAllSkills] = useState(false);
    
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

  return (
    <div className="flex flex-col max-w-6xl items-center lg:items-start justify-center mx-auto text-left p-2">

        <h1 className="text-2xl md:text-3xl text-left font-bold mb-2">Skills</h1>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-col justify-center items-center'>
            {skills.map((skill, index) => (
                <SkillCard 
                key={index} 
                name={skill.name} 
                description={skill.description} 
                icon={skill.icon} 
                color={skill.color} />
            ))}
        </div>
        
        <button onClick={() => setShowAllSkills(!showAllSkills)} className="sm:hidden text-sm text-blue-500">
            {showAllSkills ? "Show Less" : "Show More"}
        </button>

    </div>
  )
}

export default SkillsList
