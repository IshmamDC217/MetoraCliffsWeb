import React from 'react'
import Image from 'next/image'
import Heading from './Heading'
import MCbandpic from '../components/MCbandpic.jpg'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { FaSpotify } from 'react-icons/fa'

const AboutUs = () => {
  return (
    <section className='container mx-auto py-10 px-4' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>

      <Heading title="About Us" />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>

        <div>
          <a className='px-4'> <Image src={MCbandpic} width="400px" height="350px" alt="Band Pic" className="bandpic" /> </a>
        </div>

        <div>

          <div className='max-w-[800px]'>
          <p>&nbsp;</p>
            <h2 className='font-bold mt-1 mb-10'> A Progressive Rock band based in Leeds</h2>
            <p className='text-gray-600'>Fusing Prog Rock/Metal with video game synth melodies, Metora Cliffs appeal to Prog fanatics and casual listeners alike. Taking inspiration from modern & classic prog/video game music composition like that of Nintendo & Sega, their live shows and 3 singles showcase their enticing sound. The band consists of Dylan Tann (vocals), Ivan Knight (keyboard), Ish Ahmed & Alexander Kelk (guitars), Eddie Hyndes (bass) & Louis Walker (drums).</p>

          </div>

          <div className='flex items-center justify-between w-[300px]'>
            <div className='flex flex-col gap-6'>
              <p>&nbsp;</p>
              <div className='flex gap-4 items-center font-medium'>
                <AiFillInstagram className='text-[#962fbf] text-[22px]' />
                <a href="https://instagram.com/metoracliffsmusic" target="_blank">Instagram</a>
              </div>

              <div className='flex gap-4 items-center font-medium'>
                <AiFillYoutube className='text-[#c4302b] text-[22px]' />
                <a href="https://youtube.com/@metoracliffs5994" target="_blank">Youtube</a>
              </div>

              <div className='flex gap-4 items-center font-medium'>
                <AiFillFacebook className='text-[#3b5998] text-[22px]' />
                <a href="https://facebook.com/metoracliffs" target="_blank">Facebook</a>
              </div>

              <div className='flex gap-4 items-center font-medium'>
                <FaTiktok className='text-[#00f2ea] text-[22px]' />
                <a href="https://tiktok.com/@metoracliffs" target="_blank">TikTok</a>
              </div>

              <div className='flex gap-4 items-center font-medium'>
                <FaSpotify className='text-[#1db954] text-[22px]' />
                <a href="https://open.spotify.com/artist/7L8GCBu7rpT4nWglH7d0X6" target="_blank">Spotify</a>
              </div>

            </div>

          </div>


        </div>

      </div>

    </section>
  )
}

export default AboutUs;
