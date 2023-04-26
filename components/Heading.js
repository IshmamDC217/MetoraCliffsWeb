import React from 'react'

const Heading = ({ title }) => {
  return (
    <div className='text-white text-2xl font-medium flex items-center gap-4 
    py-5'>
      {title}
      <div className='bg-[#7aace8] h-[2px] w-[40px] translate-y-1'></div>

    </div>
  )
}

export default Heading
