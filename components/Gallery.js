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
import f from '../components/gallery/f.jpg'
import g from '../components/gallery/g.jpg'
import h from '../components/gallery/h.jpg'
import i from '../components/gallery/i.jpg'
import j from '../components/gallery/j.jpg'
import k from '../components/gallery/k.jpg'
import l from '../components/gallery/l.jpg'
import m from '../components/gallery/m.jpg'
import n from '../components/gallery/n.jpg'
import o from '../components/gallery/o.jpg'
import p from '../components/gallery/p.jpg'
import q from '../components/gallery/q.jpg'

const Gallery = () => {
    return (
        <section className='container mx-auto py-10 px-4' style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
            <Heading title="Gallery" />
            <div className='max-w-full grid grid-cols-6 gap-4'>
                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='row-span-2 relative group'>
                        <Image class="image" src={l} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>

                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='relative group'>
                        <Image class="image" src={c} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>    

                {/* <div className='relative group'>
                    <Image class="image" src={ADWS} alt="" />
                    <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                group:hover:opacity-100 grid place_items-center text-white'>
                        Project TItle
                    </div>
                </div> */}
                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='relative group'>
                        <Image class="image" src={MOM} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>

                {/* <div className='row-span-2 relative group'>
                    <Image class="image" src={a} alt="" />
                    <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                group:hover:opacity-100 grid place_items-center text-white'>
                        Project TItle
                    </div>
                </div>

                <div className='row-span-2 relative group'>
                    <Image class="image" src={b} alt="" />
                    <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                group:hover:opacity-100 grid place_items-center text-white'>
                        Project TItle
                    </div>
                </div> */}

                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='relative group'>
                        <Image class="image" src={d} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>

                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='relative group'>
                        <Image class="image" src={e} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>

                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='relative group'>
                        <Image class="image" src={f} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>

                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='relative group'>
                        <Image class="image" src={g} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>

                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='relative group'>
                        <Image class="image" src={h} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>

                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='relative group'>
                        <Image class="image" src={i} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>

                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='relative group'>
                        <Image class="image" src={j} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                    </a>    

                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='relative group'>
                        <Image class="image" src={k} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>

                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='relative group'>
                        <Image class="image" src={MCMC} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>    

                <a class="scale-90 hover:scale-100 ease-in duration-200"> 
                    <div className='relative group'>
                        <Image class="image" src={m} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>                    

                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='relative group'>
                        <Image class="image" src={n} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>    

                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='relative group'>
                        <Image class="image" src={o} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>    

                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='relative group'>
                        <Image class="image" src={p} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>

                <a class="scale-90 hover:scale-100 ease-in duration-200">
                    <div className='relative group'>
                        <Image class="image" src={q} alt="" />
                        <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 
                    group:hover:opacity-100 grid place_items-center text-white'>
                            Project TItle
                        </div>
                    </div>
                </a>

            </div>

        </section>
        
    )
}

export default Gallery
