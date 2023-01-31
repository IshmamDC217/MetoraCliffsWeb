import React from 'react'
import Image from 'next/image'
import Heading from './Heading'
import MCbandpic from '../components/MCbandpic.jpg'

const AboutUs = () => {
  return (
    <section className='container mx-auto py-10 px-4' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>

        <Heading title="About Us"/> 

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>

            <div>
                <a className='px-4'> <Image src={MCbandpic} width="400px" height="400px" alt="Band Pic" className="bandpic"/> </a>
            </div>

        </div>
      
    </section>
  )
}

export default AboutUs
