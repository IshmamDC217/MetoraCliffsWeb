import React from 'react'

import Typewriter from "typewriter-effect"

const Banner = () => {
  return (
    <div className='bg-[url("/metorabanner.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center'>

      <div className='container mx-auto px-4'>

        <div className='max-w-[450px] text-white flex flex-col gap[40px]'>

          <div>
            <h1 className='text-5xl'>We are Metora Cliffs</h1>
            <h4 className='text-2xl mt-3'>
            <Typewriter
              options={{
                strings: [
                  "Leeds Based",
                  "Prog Band"
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
          <div className='bg-[#834333] h-[2px] w-[70px]'></div> <p>&nbsp;</p>
          <div> <p>Cited as one of the bands of all time in Leeds</p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner
