import React from 'react'
import Image from 'next/image'
import Heading from './Heading'
import MCMC from '../components/MCMC.jpg'
import ADWS from '../components/ADWS.png'
import MOM from '../components/MOM.png'
import { useInView } from 'react-intersection-observer';

const Work = () => {
  const { ref, inView, entry } = useInView()

  return (
    <section className='container mx-auto py-10 px-4' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
      <Heading title="Singles"></Heading>
      <div className='grid grid-cols-1 gap-4'>
        <div className='row-span-2 relative group'>

          <div ref={ref} className={`${inView ? 'show' : null} intobs`} style={{ display: 'flex', flexWrap: 'wrap' }}>
            <a class="scale-90 hover:scale-100 ease-in duration-200" href="https://open.spotify.com/track/6QPgAgYlKjTrh6k0zd6rRZ?si=ROdex7jIRI-Wx3-MV9PLQA">
              <Image src={MCMC} alt="Single" style={{ width: '300px', height: '300px', margin: '10px' }} />
              <div class="text-[#ffffff] caption px-3" style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
                Mr. Crim.
              </div>
            </a>

            <a class="scale-90 hover:scale-100 ease-in duration-200" href="https://open.spotify.com/track/7M9MnPwrAdLsQTkLnVibiB?si=JI2txMgsQa-o2DLKzpJAZA">
              <Image src={ADWS} alt="Second Single" style={{ width: '300px', height: '300px', margin: '10px' }} />
              <div class="text-[#ffffff] caption px-3">
                As Dawn Would Say
              </div>
            </a>


            <a class="scale-90 hover:scale-100 ease-in duration-200" href="https://open.spotify.com/track/6oHSPd3M66yPemxkVyyf3E?si=Sh69_HdjQsqLuohlZgEhBg">
              <Image src={MOM} alt="Third Single" style={{ width: '300px', height: '300px', margin: '10px' }} />
              <div class="text-[#ffffff] caption px-3">
                Mind Over Matter
              </div>
            </a>
          </div>

          <div className='bg-[#000000bd} absolute w-[100%] top-0 opacity-0 transition duration-500 group:hover:opacity-100 grid place_items-center_text-white'>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Work
