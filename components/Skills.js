import React, { useState } from 'react'
import Heading from './Heading'
import Image from 'next/image'
import Dylan from '../components/singles/Dylan.jpg'
import Alexander from '../components/singles/Alexander.jpg'
import Ish from '../components/singles/Ish.jpg'
import Louis from '../components/singles/Louis.jpg'
import Eddie from '../components/singles/Eddie.jpg'
import { GiMicrophone } from 'react-icons/gi'
import { GiGuitar } from 'react-icons/gi'
import { GiDrumKit } from 'react-icons/gi'
import { GiGuitarBassHead } from 'react-icons/gi'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

const Skills = () => {
    const [ishEasterEgg, setShowEasterEgg] = useState(false);
    const [dylEasterEgg, setShowEasterEgg1] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className='container mx-auto py-10 px-4' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>

            <Heading title="Members & Stats" />
            <p>&nbsp;</p>
            <p className='text-gray-400 -mt-10 mb-1'>Meet the Band</p>

            <motion.div
                ref={ref}
                variants={animationVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
            >

                <div className='text-[#ffffff] grid grid-cols-1 md:grid-cols-2 gap-[50px] mt-3'>
                    <div className='dylFrame max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#0392cf] text-white'>
                        <div className='max-w-[500px]'>
                            <a className='px-4'> <Image src={Dylan} width="350px" height="300px" alt="Single Shot" className="Dylan" /> </a>
                        </div>
                        <div>
                            <div className='max-w-[800px]'>
                                <GiMicrophone className='text-[40px]' />Vocalist<p>&nbsp;</p>
                                <h2 className='text-xl font-bold mt-1 mb-10'> Dylan Tann</h2>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 -mt-5'>
                                    <div>
                                        <p>Chug</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '70%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Shred</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '60%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Improv</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '95%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Fingering</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '100%', backgroundColor: '#ffffff'}} >
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Groove</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '70%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div onMouseEnter={() => setShowEasterEgg1(true)}
                                        onMouseLeave={() => setShowEasterEgg1(false)}>
                                        <p>Pinneapple on Pizza</p>
                                        {dylEasterEgg ? <p class="max-w-[200px] text-sm">unless it&apos;s Pinneapple &apos;and&apos; Pizza</p> : null}
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute h-[6px]' style={{width: `${dylEasterEgg ? "100%" : "10%"}`, height: '6px', backgroundColor: '#ffffff' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Chops</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '50%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Blast Beat</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '80%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between w-[300px]'>
                            </div>
                        </div>
                    </div>

                    <div className='ishFrame max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#f6cd61] text-black'>
                        <div className='max-w-[500px]'>
                            <a className='px-4'> <Image src={Ish} width="350px" height="300px" alt="Single Shot" className="Ishmam" /> </a>
                        </div>
                        <div>
                            <div className='max-w-[800px]'>
                                <GiGuitar className='text-[40px]' />Guitarist<p>&nbsp;</p>
                                <h2 className='text-xl font-bold mt-1 mb-10 text-black'> Ish Ahmed</h2>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 -mt-5'>

                                    <div>
                                        <p>Chug</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '80%', backgroundColor: '#000000'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Shred</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '100%', backgroundColor: '#000000'}} >
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Improv</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '90%', backgroundColor: '#000000'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div onMouseEnter={() => setShowEasterEgg(true)}
                                        onMouseLeave={() => setShowEasterEgg(false)}>
                                        <p>Fingering</p>
                                        {ishEasterEgg ? <p class="max-w-[200px] text-sm">unless it&apos;s my girlfriend, then 10/10 jkjk</p> : null}
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute h-[6px]' style={{height: '6px', width: `${ishEasterEgg ? "100%" : "70%"}`, backgroundColor: '#000000'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Groove</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '60%', backgroundColor: '#000000'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Pinneapple on Pizza</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '100%', backgroundColor: '#000000'}} >
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Chops</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '70%', backgroundColor: '#000000'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Blast Beat</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '60%', backgroundColor: '#000000'}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between w-[300px]'>
                            </div>
                        </div>
                    </div>

                    {/* <div className='bg-[#7aace8] h-[2px] w-[800px] translate-y-1'></div> */}

                    <div className='alexFrame max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#7bc043] text-white'>
                        <div className='max-w-[500px]'>
                            <a className='px-4'> <Image src={Alexander} width="350px" height="300px" alt="Single Shot" className="Alex" /> </a>
                        </div>
                        <div>
                            <div className='max-w-[800px]'>
                                <GiGuitar className='text-[40px]' />Guitarist<p>&nbsp;</p>
                                <h2 className='text-xl font-bold mt-1 mb-10'> Alexander Kelk</h2>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 -mt-5'>

                                    <div>
                                        <p>Chug</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '100%', backgroundColor: '#ffffff'}} >
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Shred</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '80%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Improv</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '55%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Fingering</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '60%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Groove</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '50%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Pinneapple on Pizza</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '100%', backgroundColor: '#ffffff'}} >
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Chops</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '60%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Blast Beat</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '40%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between w-[300px]'>
                            </div>
                        </div>
                    </div>

                    {/* <div className='bg-[#7aace8] h-[2px] w-[800px] translate-y-1'></div> */}

                    <div className='louisFrame max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#f9f4f4] text-black'>
                        <div className='max-w-[500px]'>
                            <a className='px-4'> <Image src={Louis} width="350px" height="300px" alt="Single Shot" className="Louis" /> </a>
                        </div>
                        <div>
                            <div className='max-w-[800px]'>
                                <GiDrumKit className='text-[40px]' />Drummer<p>&nbsp;</p>
                                <h2 className='text-xl font-bold mt-1 mb-10 text-black'> Louis Walker</h2>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 -mt-5'>

                                    <div>
                                        <p>Chug</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '40%', backgroundColor: '#000000'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Shred</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '40%', backgroundColor: '#000000'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Improv</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '85%', backgroundColor: '#000000'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Fingering</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '85%', backgroundColor: '#000000'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Groove</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '90%', backgroundColor: '#000000'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Pinneapple on Pizza</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '100%', backgroundColor: '#000000'}} >
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Chops</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '85%', backgroundColor: '#000000'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Blast Beat</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '100%', backgroundColor: '#000000'}} >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between w-[300px]'>
                            </div>
                        </div>
                    </div>



                    <div className='eddieFrame max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ee4035] text-white'>
                        <div className='max-w-[500px]'>
                            <a className='px-4'> <Image src={Eddie} width="350px" height="300px" alt="Single Shot" className="Eddie" /> </a>
                        </div>
                        <div>
                            <div className='max-w-[800px]'>
                                <GiGuitarBassHead className='text-[40px]' />Bassist<p>&nbsp;</p>
                                <h2 className='text-xl font-bold mt-1 mb-10'> Eddie Hyndes</h2>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 -mt-5'>

                                    <div>
                                        <p>Chug</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '60%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Shred</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '65%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Improv</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '80%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Fingering</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '95%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Groove</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '100%', backgroundColor: '#ffffff'}} >
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Pinneapple on Pizza</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '100%', backgroundColor: '#ffffff'}} >
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Chops</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '75%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <p>&nbsp;</p>
                                    <div>
                                        <p>Blast Beat</p>
                                        <div className='relative bg-gray-400 h-[6px] mt-1'>
                                            <div className='skillbar absolute' style={{height: '6px', width: '40%', backgroundColor: '#ffffff'}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between w-[300px]'>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Skills