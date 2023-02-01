import React from 'react'
import Image from 'next/image'
import Heading from './Heading'
import MCMC from '../components/MCMC.jpg'
import ADWS from '../components/ADWS.png'
import MOM from '../components/MOM.png'
import a from '../components/gallery/a.jpg'
import b from '../components/gallery/b.jpg'
import c from '../components/gallery/c.jpg'
import d from '../components/gallery/d.jpg'
import e from '../components/gallery/e.jpg'

const Gallery = () => {
    return (
        <section className='container mx-auto py-10 px-4' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
            <Heading title="Gallery" />
            <div className='grid grid-cols-3 gap-4'>
                <div className='row-span-2 relative group'>
                    <Image src={MCMC} alt="" />
                    <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                group:hover:opacity-100 grid place_items-center text-white'>
                        Project TItle
                    </div>
                </div>

                <div className='relative group'>
                    <Image src={ADWS} alt="" />
                    <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                group:hover:opacity-100 grid place_items-center text-white'>
                        Project TItle
                    </div>
                </div>

                <div className='relative group'>
                    <Image src={MOM} alt="" />
                    <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                group:hover:opacity-100 grid place_items-center text-white'>
                        Project TItle
                    </div>
                </div>

                <div className='row-span-2 relative group'>
                    <Image src={a} alt="" />
                    <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                group:hover:opacity-100 grid place_items-center text-white'>
                        Project TItle
                    </div>
                </div>

                <div className='row-span-2 relative group'>
                    <Image src={b} alt="" />
                    <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                group:hover:opacity-100 grid place_items-center text-white'>
                        Project TItle
                    </div>
                </div>

                <div className='relative group'>
                    <Image src={c} alt="" />
                    <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                group:hover:opacity-100 grid place_items-center text-white'>
                        Project TItle
                    </div>
                </div>

                <div className='relative group'>
                    <Image src={d} alt="" />
                    <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                group:hover:opacity-100 grid place_items-center text-white'>
                        Project TItle
                    </div>
                </div>

                <div className='relative group'>
                    <Image src={e} alt="" />
                    <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                group:hover:opacity-100 grid place_items-center text-white'>
                        Project TItle
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Gallery
