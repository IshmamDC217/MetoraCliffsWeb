import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';

const Sidemenu = ({isOpen, toggleSidebar}) => {
  return (
    <div className={`w-screen h-screen ${isOpen ? "fixed" : "hidden"} top-0 left-0 bg-gray-800 z-20 \
    text-white grid place-items-center`}>

        <div className='absolute top-0 right-0 text-lg hover:cursor-pointer mt-2 mr-2' 
        onClick={toggleSidebar}>
            <AiFillCloseCircle />
        </div>

        <div className='flex flex-col gap-4 text-[28px]'>
            <a className='hover:text-gray-500' href="/">Home</a>
            <a className='hover:text-gray-500' href="/songs">Songs</a>
            <a className='hover:text-gray-500' href="/about">About</a>
            <a className='hover:text-gray-500' href="/gallery">Gallery</a>
            <a className='hover:text-gray-500' href="/contact">Contact</a>
        </div>
      
    </div>
  )
}

export default Sidemenu
