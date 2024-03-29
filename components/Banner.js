import React from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';
import bannerpart from '../components/bannerpart.png';
import Typewriter from 'typewriter-effect';
import Button from './Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import metorabanner from '../public/metorabanner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


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
    <div className="relative h-screen">
      <Image
        src={metorabanner}
        layout="fill"
        objectFit="cover"
        alt="Metora Cliffs"
      />
      <div className="absolute inset-0 flex items-center justify-center lg:mx-32">
        <a>
          <Image
            src={bannerpart}
            width="400px"
            height="400px"
            alt="Metora Cliffs"
            className="bannerpart"
          />
        </a>
        <div className="container lg:mx-5">
          <div className="max-w-[450px] text-white flex flex-col gap[40px]">
            <animated.div style={fadeIn}>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <animated.h2 className="text-4xl px-4" style={fadeIn}>
                Welcome to
              </animated.h2>
              <animated.h1 className="text-5xl px-4" style={{ ...fadeIn, letterSpacing: '0.05em' }}>
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
            <animated.div
              className="bg-[#217ea0] h-[4px] w-[250px] ml-4"
              style={fadeIn}
            ></animated.div>{' '}
            <animated.div className="px-4" style={fadeIn}>
              {' '}
              <p>
                <strong className='text-lg'>Cited</strong> as one of the bands of <strong className='text-lg'>all time</strong> in <strong className='text-lg'>Leeds</strong>.
              </p>
              <p>&nbsp;</p>
              <Button link="/contact" text="Contact Us" />
            </animated.div>
          </div>
        </div>
      </div>
      <ToastContainer
        progressClassName="toastProgress"
        position="bottom-right"
        color="green"
      />
      <div className="absolute bottom-9 text-center arrow-bounce">
        <p className='scd text-white text-center'>Scroll Down</p>
        <FontAwesomeIcon className='lg:mx-8' icon={faChevronDown} style={{ color: "white", blockSize: "40px" }} />
      </div>
    </div>
  );
};

export default Banner;