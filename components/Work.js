import React from 'react'
import Image from 'next/image'
import Heading from './Heading'
import MCMC from '../components/MCMC.jpg'
import ADWS from '../components/ADWS.png'

const Work = () => {
  return (
    <section className='container mx-auto py-10 px-4' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
      <Heading title="Singles"></Heading>
      <div className='grid grid-cols-3 gap-4'>
        <div className='row-span-2 relative group'>
          
          <a href="https://open.spotify.com/track/6QPgAgYlKjTrh6k0zd6rRZ?si=ROdex7jIRI-Wx3-MV9PLQA">
          <div className='max-w-xs'> 
          <Image src={MCMC} alt="Single" style={{width: '200px', height: '200px', margin: '10px'}}/>
          </div>
            <div class="caption" style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
              Mr. Crim.
            </div>
          </a>

          <a href="https://open.spotify.com/track/7M9MnPwrAdLsQTkLnVibiB?si=JI2txMgsQa-o2DLKzpJAZA">
          <div className='max-w-xs'>
          <Image src={ADWS} alt="Second Single" style={{width: '200px', height: '200px', margin: '10px'}}/>
          </div>
            <div class="caption">
              As Dawn Would Say
            </div>
          </a>
{/* 
          <Image src={MCMC} alt="Single" /> */}
          <div className='bg-[#000000bd} absolute w-[100%] top-0 opacity-0 transition duration-500 group:hover:opacity-100 grid place_items-center_text-white'>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Work
