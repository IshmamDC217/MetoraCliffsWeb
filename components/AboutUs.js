import React, { useRef } from 'react';
import Image from 'next/image';
import Heading from './Heading';
import MCbandpic from '../components/MCbandpic.jpg';
import nbandpic2 from '../components/gallery/nbandpic2.jpg';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';


const AboutUs = () => {
  const { ref: ref1, inView: inView1, entry: entry1 } = useInView({
    threshold: 0.95, // Adjust the threshold value as per your requirement
  });

  const { ref: ref2, inView: inView2, entry: entry2 } = useInView({
    threshold: 0.95, // Adjust the threshold value as per your requirement
  });

  return (
    <section className='container mx-auto py-10 px-4 max-h-screen' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
      <Heading title="About Us" />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
        <div className='max-w-[900px] py-4 shadow-lg flex flex-col gap-4 text-white' style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#1a1b1fbe' }}>
          <a ref={ref1} className= 'px-4'>
            <Image src={nbandpic2} alt="Band Pic" className="bandpic w-full h-full" />
          </a>
        </div>

        <div>
          <div className='max-w-[800px]'>
            <p>&nbsp;</p>
            <h2 ref={ref2} className={`${inView2 ? 'show' : ''} intobssr`}></h2>
            <h2 className='text-lg font-bold mt-1 mb-10'>A Progressive Rock band based in Leeds</h2>
            <p className={`${inView2 ? 'show' : ''} intobssr text-white`}>Fusing Prog Rock/Metal with video game synth melodies, Metora Cliffs appeal to Prog fanatics and casual listeners alike. Taking inspiration from modern & classic prog/video game music composition like that of Nintendo & Sega, their live shows and 3 singles showcase their enticing sound. The band consists of Dylan Tann (vocals), Ivan Knight (keyboard), Ish Ahmed & Alexander Kelk (guitars), Eddie Hyndes (bass) & Louis Walker (drums).</p>
          </div>

          <div className='flex items-center justify-between w-[300px]'>
            <div className='flex flex-col gap-6'>
  
              <div className='flex gap-4 items-center font-medium' style={{ color: '#962fbf', fontSize: '1em' }}>
                <AiFillInstagram className={`${inView2 ? 'show' : ''} intobssr mt-4`} />
                <a className={`${inView2 ? 'show' : ''} intobssr text-white mt-4`} href="https://instagram.com/metoracliffsmusic" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
              <div className='flex gap-4 items-center font-medium' style={{ color: '#c4302b', fontSize: '1em' }}>
                <AiFillYoutube className={`${inView2 ? 'show' : ''} intobssr`} />
                <a className={`${inView2 ? 'show' : ''} intobssr text-white`} href="https://youtube.com/@metoracliffs5994" rel="noopener noreferrer">
                  Youtube
                </a>
              </div>

              <div className='flex gap-4 items-center font-medium' style={{ color: '#3b5998', fontSize: '1em' }}>
                <AiFillFacebook className={`${inView2 ? 'show' : ''} intobssr`} />
                <a className={`${inView2 ? 'show' : ''} intobssr text-white`} href="https://facebook.com/metoracliffs" rel="noopener noreferrer">
                  Facebook
                </a>
              </div>

              <div className='flex gap-4 items-center font-medium' style={{ color: '#00f2ea', fontSize: '1em' }}>
                <FaTiktok className={`${inView2 ? 'show' : ''} intobssr`} />
                <a className={`${inView2 ? 'show' : ''} intobssr text-white`} href="https://tiktok.com/@metoracliffs" rel="noopener noreferrer">
                  TikTok
                </a>
              </div>

              <div className='flex gap-4 items-center font-medium' style={{ color: '#1db954', fontSize: '1em' }}>
                <FaSpotify className={`${inView2 ? 'show' : ''} intobssr`} />
                <a className={`${inView2 ? 'show' : ''} intobssr text-white`} href="https://open.spotify.com/artist/7L8GCBu7rpT4nWglH7d0X6" rel="noopener noreferrer">
                  Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;