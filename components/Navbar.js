import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import corner from '../components/corner.png'
import { BiImage } from 'react-icons/bi'
import { GiFire } from 'react-icons/gi'

const Navbar = () => {
    return (
        <div className='bg-white fixed top-0 w-[100%] z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-4 ' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
                <div className='max-w-xs'> <Image src={corner} width="300px" height="300px" alt="Metora Cliffs" /> </div>
                <div className='hidden md:flex gap-6'>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>

                    <Link class="scale-90 hover:scale-100 ease-in duration-200" href='/'>
                        Home
                    </Link>

                    <Link class="scale-90 hover:scale-100 ease-in duration-200" href='/'>
                        Songs
                    </Link>

                    <Link class="scale-90 hover:scale-100 ease-in duration-200" href='/'>
                        About
                    </Link>

                    <Link class="scale-90 hover:scale-100 ease-in duration-200" href='/'>
                        Gallery
                    </Link>

                    <Link class="scale-90 hover:scale-100 ease-in duration-200" href='/'>
                        Contact
                    </Link>
                </div>
                <p>&nbsp;</p>

                <a href="#" className='hidden md:flex border border-[#217ea0] px-2 py-2 mx-2 text-[#000000] rounded-[3px] items-center gap-2
                                        hover:bg-[#217ea0] hover:text-white transition duration-200'>
                    Upcoming Gigs!
                    <BiImage />
                </a>

                <div className='md:hidden text-[24px]'>
                    <GiFire />
                </div>
            </div>
        </div>
    )
}

export default Navbar
