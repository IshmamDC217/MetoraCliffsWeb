import React from 'react'
import Heading from './Heading'
import { SiYoutubemusic } from 'react-icons/si'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { BsMusicNoteList } from 'react-icons/bs'
import Image from 'next/image'
import tm from '../components/gallery/tm.jpg'
import tv from '../components/gallery/tv.jpg'
import tt from '../components/gallery/tt.jpg'
import { useInView } from 'react-intersection-observer';

const OurContent = () => {
    const { ref, inView, entry } = useInView()
    return (
        <section className='contentcontainer' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }} >
            <Heading title="Our Content" />
            <div ref={ref} className={`${inView ? 'show' : null} intobs grid grid-cols-1 md:grid-cols-3 gap-6 mb-24` }>
                <a class="contentimage" href="https://open.spotify.com/artist/7L8GCBu7rpT4nWglH7d0X6">
                    <div className='max-w-[500px] shadow-lg flex flex-col px-8 py-6 text-white gap-4' style={{ backgroundColor: '#e95550'}}>

                        <SiYoutubemusic style={{ fontSize: '28px'}}/>

                        <h2 className='font-medium text-2xl'>Music</h2> 
                        <Image class="image" src={tm} alt="" />

                        <p>Our Originals</p>
                    </div>
                </a>

                <a class="contentimage" href="https://www.youtube.com/@metoracliffs5994">
                    <div className='max-w-[500px] shadow-lg flex flex-col px-8 py-6 text-white gap-4' style={{ backgroundColor: '#feb833'}}>

                        <BsFillCameraVideoFill style={{ fontSize: '28px'}}/>

                        <h2 className='font-medium text-2xl'>Videos</h2>
                        <Image class="image" src={tv} alt="" />
                        <p>Covers and Music Videos</p>

                    </div>
                </a>

                <a class="contentimage" href="">
                    <div className='max-w-[500px] shadow-lg flex flex-col px-8 py-6 text-white gap-4' style={{ backgroundColor: '#48929c'}}>

                        <BsMusicNoteList style={{ fontSize: '28px'}}/>

                        <h2 className='font-medium text-2xl'>Tabs</h2>
                        <Image class="image" src={tt} alt="" />
                        <p>Tabs for our songs</p>

                    </div>
                </a>
            </div>

        </section>
    )
}

export default OurContent
