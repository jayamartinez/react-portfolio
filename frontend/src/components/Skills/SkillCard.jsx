import React from 'react'

const SkillCard = ({ name, description, icon, color }) => {
    return (
        <div className='bg-neutral-950 border border-neutral-900 hover:bg-neutral-900 
            hover:border-gray-400/20 transition-colors duration-200 rounded-lg p-3 w-64 flex 
            items-center space-x-4'>

            <div className={`text-3xl w-10 h-10 object-contain flex items-center justify-center rounded-lg p-2`}
            style={{ backgroundColor: `${color}33` }}>

                <img src={icon} alt={name} className="w-full h-full object-contain" />

            </div>

            <div>
                <h3 className="text-sm font-semibold">{name}</h3>
                <p className="text-zinc-500 truncate">{description}</p>
            </div>
            
        </div>
    )
}

export default SkillCard
