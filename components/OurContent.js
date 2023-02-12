import React from 'react'
import Heading from './Heading'
import { RiLightbulbFlashLine } from 'react-icons/ri'

const OurContent = () => {
    return (
        <section className='container mx-auto py-10 px-4' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
            {/* https://open.spotify.com/artist/7L8GCBu7rpT4nWglH7d0X6 */}
            <Heading title="Our Content" />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <a class="scale-90 hover:scale-100 ease-in duration-200" href="https://open.spotify.com/artist/7L8GCBu7rpT4nWglH7d0X6">
                    <div className='max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#217ea0] text-white'>
                        
                        <RiLightbulbFlashLine className='text-[28px]' />

                        <h2 className='font-medium text-[28px]'>Music</h2>
                        
                        <p>Our Originals</p>
                    </div>
                </a>

                <a class="scale-90 hover:scale-100 ease-in duration-200" href="https://open.spotify.com/artist/7L8GCBu7rpT4nWglH7d0X6">
                    <div className='max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#217ea0] text-white'>

                        <RiLightbulbFlashLine className='text-[28px]' />

                        <h2 className='font-medium text-[28px]'>Videos</h2>

                        <p>Covers and Music Videos</p>

                    </div>
                </a>

                <a class="scale-90 hover:scale-100 ease-in duration-200" href="https://open.spotify.com/artist/7L8GCBu7rpT4nWglH7d0X6">
                    <div className='max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#217ea0] text-white'>

                        <RiLightbulbFlashLine className='text-[28px]' />

                        <h2 className='font-medium text-[28px]'>Artwork</h2>

                        <p>Metora's Artwork by Dylan Tann</p>

                    </div>
                </a>

            </div>

        </section>
    )
}

export default OurContent
