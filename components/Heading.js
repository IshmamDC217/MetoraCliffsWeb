import React from 'react'

const Heading = ({ title }) => {
  return (
    <div className='text-white text-2xl font-medium flex items-center gap-4 
    py-5'>- {title} -
    </div>
  )
}

export default Heading
