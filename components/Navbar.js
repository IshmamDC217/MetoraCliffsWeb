import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import corner from '../components/corner.png'
import { BiImage } from 'react-icons/bi'
import { GiFire } from 'react-icons/gi'

const Navbar = () => {
    return (
        <div className='bg-white fixed top-0 w-[100%] z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-4'>
                <div className='max-w-xs'> <Image src={corner} width="300px" height="300px" alt="Metora Cliffs" /> </div>
                <div className='hidden md:flex gap-6'>

                    <Link href='/'>
                        Home
                    </Link>

                    <Link href='/'>
                        About
                    </Link>

                    <Link href='/'>
                        Gallery
                    </Link>

                    <Link href='/'>
                        Blog
                    </Link>

                    <Link href='/'>
                        Contact
                    </Link>
                </div>

                <a href="#" className='hidden md:flex border border-[#105642] px-4 py-1 text-[#000000] rounded-[5px] items-center gap-2
                                        hover:bg-[#105642] hover:text-white transition duration-200'>
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
