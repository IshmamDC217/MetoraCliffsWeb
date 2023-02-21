import React, { useState } from 'react'
import Heading from './Heading'
import Image from 'next/image'
import Dylan from '../components/singles/Dylan.jpg'
import Alexander from '../components/singles/Alexander.jpg'
import Ish from '../components/singles/Ish.jpg'
import Louis from '../components/singles/Louis.jpg'
import Eddie from '../components/singles/Eddie.jpg'

const Skills = () => {
    const [ishEasterEgg, setShowEasterEgg] = useState(false);

    return (
        <section className='container mx-auto py-10 px-4' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>

            <Heading title="Members & Stats" />
            <p>&nbsp;</p>
            <p className='text-gray-600 -mt-10 mb-1'>Meet the Band</p>

            <div className='text-[#ffffff] grid grid-cols-1 md:grid-cols-2 gap-[50px] mt-3'>
                <div className='max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#0392cf] text-white'>
                    {/* style={{ display: 'flex', justifyContent: 'center' }} */}

                    <div className='max-w-[500px]'>
                        <a className='px-4'> <Image src={Dylan} width="350px" height="300px" alt="Single Shot" className="Dylan" /> </a>
                    </div>
                    <div>
                        <div className='max-w-[800px]'>
                            <h2 className='text-xl font-bold mt-1 mb-10'> Dylan Tann</h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 -mt-5'>

                                <div>
                                    <p>Chug</p>
                                    <div className='relative bg-gray-400 h-[6px] mt-1'>
                                        <div className='bg-[#000000] absolute h-[6px] w-[70%]'>
                                        </div>
                                    </div>
                                </div>
                                <p>&nbsp;</p>
                                <div>
                                    <p>Shred</p>
                                    <div className='relative bg-gray-400 h-[6px] mt-1'>
                                        <div className='bg-[#000000] absolute h-[6px] w-[60%]'>
                                        </div>
                                    </div>
                                </div>
                                <p>&nbsp;</p>
                                <div>
                                    <p>Improv</p>
                                    <div className='relative bg-gray-400 h-[6px] mt-1'>
                                        <div className='bg-[#000000] absolute h-[6px] w-[95%]'>
                                        </div>
                                    </div>
                                </div>
                                <p>&nbsp;</p>
                                <div>
                                    <p>Fingering</p>
                                    <div className='relative bg-gray-400 h-[6px] mt-1'>
                                        <div className='bg-[#000000] absolute h-[6px] w-[100%]'>
                                        </div>
                                    </div>
                                </div>
                                <p>&nbsp;</p>
                                <div>
                                    <p>Groove</p>
                                    <div className='relative bg-gray-400 h-[6px] mt-1'>
                                        <div className='bg-[#000000] absolute h-[6px] w-[70%]'>
                                        </div>
                                    </div>
                                </div>
                                <p>&nbsp;</p>
                                <div>
                                    <p>Pinneapple on Pizza</p>
                                    <div className='relative bg-gray-400 h-[6px] mt-1'>
                                        <div className='bg-[#000000] absolute h-[6px] w-[0%]'>
                                        </div>
                                    </div>
                                </div>
                                <p>&nbsp;</p>
                                <div>
                                    <p>Chops</p>
                                    <div className='relative bg-gray-400 h-[6px] mt-1'>
                                        <div className='bg-[#000000] absolute h-[6px] w-[50%]'>
                                        </div>
                                    </div>
                                </div>
                                <p>&nbsp;</p>
                                <div>
                                    <p>Blast Beat</p>
                                    <div className='relative bg-gray-400 h-[6px] mt-1'>
                                        <div className='bg-[#000000] absolute h-[6px] w-[80%]'>
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

                <div className='max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#f6cd61] text-black'>
                <div className='max-w-[500px]'>
                    <a className='px-4'> <Image src={Ish} width="350px" height="300px" alt="Single Shot" className="Ishmam" /> </a>
                </div>
                <div>
                    <div className='max-w-[800px]'>
                        <h2 className='text-xl font-bold mt-1 mb-10 text-black'> Ish Ahmed</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 -mt-5'>

                            <div>
                                <p>Chug</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[80%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Shred</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[100%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Improv</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[90%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div onMouseEnter={() => setShowEasterEgg(true)}
                                onMouseLeave={() => setShowEasterEgg(false)}>
                                <p>Fingering</p>
                                {ishEasterEgg ? <p class="max-w-[200px] text-sm">unless it's my girlfriend, then 10/10 ;)</p> : null}
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className={`bg-[#000000] absolute h-[6px] w-[${ishEasterEgg ? "100%" : "70%"}]`}>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Groove</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[60%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Pinneapple on Pizza</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[100%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Chops</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[70%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Blast Beat</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[60%]'>
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

                <div className='max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#7bc043] text-white'>
                <div className='max-w-[500px]'>
                    <a className='px-4'> <Image src={Alexander} width="350px" height="300px" alt="Single Shot" className="Alex" /> </a>
                </div>
                <div>
                    <div className='max-w-[800px]'>
                        <h2 className='text-xl font-bold mt-1 mb-10'> Alexander Kelk</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 -mt-5'>

                            <div>
                                <p>Chug</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[100%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Shred</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[80%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Improv</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[55%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Fingering</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[60%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Groove</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[50%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Pinneapple on Pizza</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[100%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Chops</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[60%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Blast Beat</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[40%]'>
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

                <div className='max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#f9f4f4] text-black'>
                <div className='max-w-[500px]'>
                    <a className='px-4'> <Image src={Louis} width="350px" height="300px" alt="Single Shot" className="Louis" /> </a>
                </div>
                <div>
                    <div className='max-w-[800px]'>
                        <h2 className='text-xl font-bold mt-1 mb-10 text-black'> Louis Walker</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 -mt-5'>

                            <div>
                                <p>Chug</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[40%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Shred</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[40%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Improv</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[85%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Fingering</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[85%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Groove</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[90%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Pinneapple on Pizza</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[100%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Chops</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[85%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Blast Beat</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[100%]'>
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

                <div className='max-w-[500px] shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ee4035] text-white'>
                <div className='max-w-[500px]'>
                    <a className='px-4'> <Image src={Eddie} width="350px" height="300px" alt="Single Shot" className="Eddie" /> </a>
                </div>
                <div>
                    <div className='max-w-[800px]'>
                        <h2 className='text-xl font-bold mt-1 mb-10'> Eddie Hyndes</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 -mt-5'>

                            <div>
                                <p>Chug</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[60%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Shred</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[65%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Improv</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[80%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Fingering</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[95%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Groove</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[100%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Pinneapple on Pizza</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[100%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Chops</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[75%]'>
                                    </div>
                                </div>
                            </div>
                            <p>&nbsp;</p>
                            <div>
                                <p>Blast Beat</p>
                                <div className='relative bg-gray-400 h-[6px] mt-1'>
                                    <div className='bg-[#000000] absolute h-[6px] w-[40%]'>
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

        </section>
    )
}

export default Skills