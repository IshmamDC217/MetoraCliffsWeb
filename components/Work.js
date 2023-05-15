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
    <section className='mcContainer mx-auto' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
      <Heading title="Singles"></Heading>
        <div className='shadow-lg flex flex-col gap-6 py-8 text-white' style={{backgroundColor:'#1a1b1fbe'}}>

          <div ref={ref} className={`${inView ? 'show' : null} intobs`} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }} >
            
            <a className="workimage" href="https://open.spotify.com/track/6QPgAgYlKjTrh6k0zd6rRZ?si=ROdex7jIRI-Wx3-MV9PLQA">
              <Image src={MCMC} alt="Single" className="image"/>
              <div className="caption px-3 py-1" >
                Mr. Crim.
              </div>
            </a>

            <a className="workimage" href="https://open.spotify.com/track/7M9MnPwrAdLsQTkLnVibiB?si=JI2txMgsQa-o2DLKzpJAZA">
              <Image src={ADWS} alt="Second Single" className="image" />
              <div className="caption px-3 py-1">
                As Dawn Would Say
              </div>
            </a>

            <a className="workimage" href="https://open.spotify.com/track/6oHSPd3M66yPemxkVyyf3E?si=Sh69_HdjQsqLuohlZgEhBg">
              <Image src={MOM} alt="Third Single" className="image" />
              <div className="caption px-3 py-1">
                Mind Over Matter
              </div>
            </a>
          </div>

          <div className='bg-[#000000bd} absolute w-[100%] top-0 opacity-0 transition duration-500 hover:opacity-100' style={{ display: 'grid', placeItems: 'center' }}>

          </div>

        </div>
      
    </section>
  )
}

export default Work
