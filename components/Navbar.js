import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import corner from '../components/corner.png';
import { BiImage } from 'react-icons/bi';
import { GiFire } from 'react-icons/gi';
import React from 'react'

const Navbar = () => {
    const linkVariant = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    const iconVariant = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className='bg-white fixed top-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-4 ' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
                <div className='max-w-xs'> <Image src={corner} width="300px" height="300px" alt="Metora Cliffs" /> </div>
                <div className='hidden md:flex gap-6'>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>

                    <motion.div whileHover={{ scale: 1.08 }} variants={linkVariant}>
                        <Link class="scale-90 hover:scale-100 ease-in duration-200" href='/'>
                            Home
                        </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.08 }} variants={linkVariant}>
                        <Link class="scale-90 hover:scale-100 ease-in duration-200" href='/'>
                            Songs
                        </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.08 }} variants={linkVariant}>
                        <Link class="scale-90 hover:scale-100 ease-in duration-200" href='/'>
                            About
                        </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.08 }} variants={linkVariant}>
                        <Link class="scale-90 hover:scale-100 ease-in duration-200" href='/gallery'>
                            Gallery
                        </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.08 }} variants={linkVariant}>
                        <Link class="scale-90 hover:scale-100 ease-in duration-200" href='/'>
                            Contact
                        </Link>
                    </motion.div>
                </div>
                <p>&nbsp;</p>

                <motion.a href="#" className='hidden md:flex border border-[#217ea0] px-2 py-2 mx-2 text-[#000000] rounded-[3px] items-center gap-2
                                          hover:bg-[#217ea0] hover:text-white transition duration-200' whileHover={{ scale: 1.08 }} variants={iconVariant}>
                    Upcoming Gigs!
                    <BiImage />
                </motion.a>

                <motion.div className='md:hidden text-[24px]' variants={iconVariant}>
                    <GiFire />
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar