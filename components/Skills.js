import React from 'react'
import Heading from './Heading'

const Skills = () => {
  return (
    <section className='container mx-auto py-10 px-4' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
            <Heading title="Member's Skills" />
            <p>&nbsp;</p>
            <p className='text-gray-600 -mt-10 mb-10'>Each of our band members have unique skills and characteristics. Check them out!</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                <div>
                    <p>Chug</p>
                    <div className='relative bg-gray-400 j-[4px] mt-2'>
                        <div className='bg-[#ff4D41] absolute h-[4px] w-[60%]'>
                        </div>
                    </div>
                </div>

            </div>
      
    </section>
  )
}

export default Skills
