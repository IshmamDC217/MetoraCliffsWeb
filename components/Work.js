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
    <section className='mcContainer mx-auto px-4' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
      <Heading title="Singles"></Heading>
      <div className='mcgrid grid-cols-1'>
        <div className='max-w-[2000px] shadow-lg flex flex-col gap-2 px-5 py-2 text-white row-span-2 relative group' style={{backgroundColor:'#1a1b1fbe'}}>

          <div ref={ref} className={`${inView ? 'show' : null} intobs`} style={{ display: 'flex', flexWrap: 'wrap' }} >
            <a className="workimage" href="https://open.spotify.com/track/6QPgAgYlKjTrh6k0zd6rRZ?si=ROdex7jIRI-Wx3-MV9PLQA">
              <Image src={MCMC} alt="Single" className="image" />
              <div className="text-[#ffffff] caption px-3 py-1" style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
                Mr. Crim.
              </div>
            </a>
            <p>&nbsp;</p>
            <a className="workimage" href="https://open.spotify.com/track/7M9MnPwrAdLsQTkLnVibiB?si=JI2txMgsQa-o2DLKzpJAZA">
              <Image src={ADWS} alt="Second Single" className="image" />
              <div className="text-[#ffffff] caption px-3 py-1">
                As Dawn Would Say
              </div>
            </a>
            <p>&nbsp;</p>
            <a className="workimage" href="https://open.spotify.com/track/6oHSPd3M66yPemxkVyyf3E?si=Sh69_HdjQsqLuohlZgEhBg">
              <Image src={MOM} alt="Third Single" className="image" />
              <div className="text-[#ffffff] caption px-3 py-1">
                Mind Over Matter
              </div>
            </a>
          </div>
          <p>&nbsp;</p>
          <div className='bg-[#000000bd} absolute w-[100%] top-0 opacity-0 transition duration-500 group:hover:opacity-100 grid place_items-center_text-white'>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Work