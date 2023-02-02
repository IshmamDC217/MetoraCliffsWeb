import React from 'react'
import Heading from './Heading'
import { RiLightbulbFlashLine } from 'react-icons/ri'

const OurContent = () => {
    return (
        <section className='container mx-auto py-10 px-4' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
            <Heading title="Our Content" />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#217ea0] text-white'>

                    <RiLightbulbFlashLine className='text-[28px]' />

                    <h2 className='font-medium text-[28px]'>Songs</h2>

                    <p>Unique songs by us</p>

                </div>

                <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#217ea0] text-white'>

                    <RiLightbulbFlashLine className='text-[28px]' />

                    <h2 className='font-medium text-[28px]'>Covers</h2>

                    <p>Unique covers by us</p>

                </div>

                <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#217ea0] text-white'>

                    <RiLightbulbFlashLine className='text-[28px]' />

                    <h2 className='font-medium text-[28px]'>Specials</h2>

                    <p>Unique renditions of our own songs or covers done by us</p>

                </div>

            </div>

        </section>
    )
}

export default OurContent
