import React from 'react'
import Image from 'next/image'
import bannerpart from '../components/bannerpart.png'
import Typewriter from "typewriter-effect"
import Button from './Button';

const Banner = () => {
  return (
    <div className='bg-[url("/metorabanner.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center'>
      <a className='px-4'> <Image src={bannerpart} width="300px" height="300px" alt="Metora Cliffs" className="bannerpart" /> </a>
      <div className='container mx-auto px-4'>
        <div className='max-w-[450px] text-white flex flex-col gap[40px]'>
          <div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <h2 className="text-4xl px-4">Welcome to</h2>
            <h1 className="text-5xl px-4">Metora Cliffs</h1>
            <h4 className='text-2xl mt-3 px-4'>
              <Typewriter
                options={{
                  strings: [
                    "Leeds-based",
                    "Progressive Rock Band",
                    "Video Game Metal",
                  ],
                  changeDelay: 3,
                  changeDeleteSpeed: 2,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </div>
          <p>&nbsp;</p>
          <div className='bg-[#217ea0] h-[4px] w-[250px] ml-4'></div> <p>&nbsp;</p>
          <div className='px-4'> <p>Cited as one of the bands of all time in Leeds.</p>
            <p>&nbsp;</p>
            <Button link="#" text="Contact Us" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
