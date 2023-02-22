import React from 'react'
import Heading from './Heading'
import { SiYoutubemusic } from 'react-icons/si'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { BsMusicNoteList } from 'react-icons/bs'
import Image from 'next/image'
import tm from '../components/gallery/tm.jpg'
import tv from '../components/gallery/tv.jpg'
import tt from '../components/gallery/tt.jpg'

const OurContent = () => {
    return (
        <section className='container mx-auto py-10 px-4' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
            {/* https://open.spotify.com/artist/7L8GCBu7rpT4nWglH7d0X6 */}
            <Heading title="Our Content" />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <a class="scale-90 hover:scale-100 ease-in duration-200" href="https://open.spotify.com/artist/7L8GCBu7rpT4nWglH7d0X6">
                    <div className='max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#e95550] text-white'>

                        <SiYoutubemusic className='text-[28px]' />

                        <h2 className='font-medium text-[28px]'>Music</h2>
                        <Image class="image" src={tm} alt="" />

                        <p>Our Originals</p>
                    </div>
                </a>

                <a class="scale-90 hover:scale-100 ease-in duration-200" href="https://www.youtube.com/@metoracliffs5994">
                    <div className='max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#feb833] text-white'>

                        <BsFillCameraVideoFill className='text-[28px]' />

                        <h2 className='font-medium text-[28px]'>Videos</h2>
                        <Image class="image" src={tv} alt="" />
                        <p>Covers and Music Videos</p>

                    </div>
                </a>

                <a class="scale-90 hover:scale-100 ease-in duration-200" href="">
                    <div className='max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#48929c] text-white'>

                        <BsMusicNoteList className='text-[28px]' />

                        <h2 className='font-medium text-[28px]'>Tabs</h2>
                        <Image class="image" src={tt} alt="" />
                        <p>Tabs for our songs</p>

                    </div>
                </a>

            </div>

        </section>
    )
}

export default OurContent
