import React from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';
import bannerpart from '../components/bannerpart.png';
import Typewriter from 'typewriter-effect';
import Button from './Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Banner = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    onRest: () => {
      toast.dark('🏆 Achievement Unlocked: Entered The Metoraverse');
    },
  });

  return (
    <div className="bg-[url('/metorabanner.jpg')] h-screen bg-cover bg-center bg-fixed flex items-center">
      <a className="px-4">
        {' '}
        <Image
          src={bannerpart}
          width="400px"
          height="400px"
          alt="Metora Cliffs"
          className="bannerpart"
        />{' '}
      </a>
      <div className="container mx-auto px-4">
        <div className="max-w-[450px] text-white flex flex-col gap[40px]">
          <animated.div style={fadeIn}>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <animated.h2 className="text-4xl px-4" style={fadeIn}>
              Welcome to
            </animated.h2>
            <animated.h1 className="text-5xl px-4" style={fadeIn}>
              Metora Cliffs
            </animated.h1>
            <animated.h4 className="text-2xl mt-3 px-4" style={fadeIn}>
              <Typewriter
                options={{
                  strings: [
                    'Leeds-based',
                    'Progressive Rock Band',
                    'Video Game Metal',
                  ],
                  changeDelay: 3,
                  changeDeleteSpeed: 2,
                  autoStart: true,
                  loop: true,
                }}
              />
            </animated.h4>
          </animated.div>
          <p>&nbsp;</p>
          <animated.div className="bg-[#217ea0] h-[4px] w-[250px] ml-4" style={fadeIn}></animated.div>{' '}
          <p>&nbsp;</p>
          <animated.div className="px-4" style={fadeIn}>
            {' '}
            <p>Cited as one of <strong className='text-[18px]'>the bands of all time</strong> in <strong className='text-[18px]'>Leeds</strong>.</p>
            <p>&nbsp;</p>
            <Button link="#" text="Contact Us" />
          </animated.div>
        </div>
      </div>
      <ToastContainer progressClassName="toastProgress" position='bottom-right' color='green'/>
    </div>
  );
};

export default Banner;
