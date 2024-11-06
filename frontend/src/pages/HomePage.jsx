import { Navbar, FlashlightScroll, SkillsList } from '../components'
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

const HomePage = () => {

    return (
        <>
            <Navbar />
            <div className='!scroll-smooth'>

                <div className='flex flex-col items-center md:items-start
                sm:py-20 sm:pt-20 lg:py-40 lg:pt-20 
                mx-auto h-full max-w-sm lg:max-w-6xl justify-between'>

                    <h1 className='font-bold text-3xl md:text-5xl pt-20 md:py-2'>Jay Martinez</h1>
                    <p className='text-lg py-2'>Full Stack Developer</p>
                    <p className='text-md'>📍 Queens, New York</p>

                    {/* Links */}
                    <div className='flex my-4 py-2 space-x-2'>

                        <div className='card-wrapper h-[40px] w-[100px]'>
                            <a href="/" download 
                            className="flex card-content items-center justify-center space-x-2 p-1">
                                <FaFileDownload />
                                <span>Resume</span>
                            </a>
                        </div>

                        <a href="https://www.linkedin.com/in/jayamartinez" target="_blank" rel="noopener noreferrer" 
                        className="flex rounded-md border border-gray-400/20 
                        bg-neutral-900 items-center justify-center transition-colors duration-300 hover:bg-neutral-800
                        space-x-2 p-1 h-[40px] w-[100px]">
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>

                        <a href="https://github.com/jayamartinez" target="_blank" rel="noopener noreferrer" 
                        className="flex rounded-md border border-gray-400/20 
                        bg-neutral-900 items-center justify-center transition-colors duration-300 hover:bg-neutral-800
                        space-x-2 p-1 h-[40px] w-[100px]">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>

                    </div>

                </div>

                <SkillsList />
                
                <div className="max-w-sm md:max-w-3xl lg:max-w-6xl mx-auto mt-32 text-left">

                    <h1 className="text-2xl md:text-3xl text-center lg:text-left font-bold mx-auto">Projects</h1>
                    
                    <FlashlightScroll />
            
                </div>

            </div>
        </>

    )
}

export default HomePage
