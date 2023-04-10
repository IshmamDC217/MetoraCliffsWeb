import React from 'react'
import Image from 'next/image'
import Heading from './Heading'
import MCbandpic from '../components/MCbandpic.jpg'
import nbandpic from '../components/gallery/nbandpic.jpg'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { FaSpotify } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const { ref, inView, entry } = useInView()

  return (
    <section className='container mx-auto py-10 px-4' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>

      <Heading title="About Us" />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>

        <div className='max-w-[900px] shadow-lg flex flex-col gap-4 px-8 py-14 bg-[#1a1b1fbe] text-white' style={{ display: 'flex', flexDirection: 'row' }}>
        {/* className='bandFrame max-w-[900px] shadow-lg flex flex-col gap-4 px-8 py-14 bg-[#1a1b1fbe] text-white' */}
          <a ref={ref} className={`${inView ? 'show' : 'show'} intobss px-4`}> <Image src={nbandpic} width="600px" height="550px" alt="Band Pic" className="bandpic" /> </a>
          {/* style={{marginLeft: "20px"}} style={{ display: 'flex', flexDirection: 'column' }}  */}
        </div>

        <div>
          <div className='max-w-[800px]'>
            <p>&nbsp;</p>
            <h2 ref={ref} className={`${inView ? 'show' : null} intobssr text-lg font-bold mt-1 mb-10`}> A Progressive Rock band based in Leeds</h2>
            <p ref={ref} className={`${inView ? 'show' : null} intobssr text-[#ffffff]`}>Fusing Prog Rock/Metal with video game synth melodies, Metora Cliffs appeal to Prog fanatics and casual listeners alike. Taking inspiration from modern & classic prog/video game music composition like that of Nintendo & Sega, their live shows and 3 singles showcase their enticing sound. The band consists of Dylan Tann (vocals), Ivan Knight (keyboard), Ish Ahmed & Alexander Kelk (guitars), Eddie Hyndes (bass) & Louis Walker (drums).</p>

          </div>

          <div className='flex items-center justify-between w-[300px]'>
            <div className='flex flex-col gap-6'>
              <p>&nbsp;</p>
              <div className='flex gap-4 items-center font-medium'>
                <AiFillInstagram ref={ref} className={`${inView ? 'show' : null} intobssr text-[#962fbf] text-[22px]`} />
                <a ref={ref} className={`${inView ? 'show' : null} intobssr text-[#ffffff]`} href="https://instagram.com/metoracliffsmusic" target="_blank">Instagram</a>
              </div>

              <div className='flex gap-4 items-center font-medium'>
                <AiFillYoutube ref={ref} className={`${inView ? 'show' : null} intobssr text-[#c4302b] text-[22px]`} />
                <a ref={ref} className={`${inView ? 'show' : null} intobssr text-[#ffffff]`} href="https://youtube.com/@metoracliffs5994" target="_blank">Youtube</a>
              </div>

              <div className='flex gap-4 items-center font-medium'>
                <AiFillFacebook ref={ref} className={`${inView ? 'show' : null} intobssr text-[#3b5998] text-[22px]`} />
                <a ref={ref} className={`${inView ? 'show' : null} intobssr text-[#ffffff]`} href="https://facebook.com/metoracliffs" target="_blank">Facebook</a>
              </div>

              <div className='flex gap-4 items-center font-medium'>
                <FaTiktok ref={ref} className={`${inView ? 'show' : null} intobssr text-[#00f2ea] text-[22px]`} />
                <a ref={ref} className={`${inView ? 'show' : null} intobssr text-[#ffffff]`} href="https://tiktok.com/@metoracliffs" target="_blank">TikTok</a>
              </div>

              <div className='flex gap-4 items-center font-medium'>
                <FaSpotify ref={ref} className={`${inView ? 'show' : null} intobssr text-[#1db954] text-[22px]`} />
                <a ref={ref} className={`${inView ? 'show' : null} intobssr text-[#ffffff]`} href="https://open.spotify.com/artist/7L8GCBu7rpT4nWglH7d0X6" target="_blank">Spotify</a>
              </div>

            </div>

          </div>


        </div>

      </div>

    </section>
  )
}

export default AboutUs;