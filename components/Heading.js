import React from 'react'

const Heading = ({ title }) => {
  return (
    <div className='text-[#ffffff] text-[32px] font-medium flex items-center gap-4 
    py-5'>
      {title}
      <div className='bg-[#7aace8] h-[2px] w-[40px] translate-y-1'></div>

    </div>
  )
}

export default Heading
