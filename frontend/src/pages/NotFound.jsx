import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-white'>
        <div className='flex flex-row items-center text-center space-x-4'>
            <h1 className='text-5xl font-semibold'>404</h1>
            <span className='text-5xl'>|</span>
            <p className='text-2xl'>Page not found.</p>
        </div>
      


        <div className='mt-4 always-card-wrapper w-[100px] h-[40px]'>
            <Link to={"/"} className='flex card-content items-center justify-center p-1'>
                Home
            </Link>
        </div>
    </div>
  )
}

export default NotFound
