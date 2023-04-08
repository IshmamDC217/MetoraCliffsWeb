import React from 'react';
import Image from 'next/image';
import Heading from './Heading';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import a from '../components/gallery/a.jpg';
import b from '../components/gallery/b.jpg';
import c from '../components/gallery/c.jpg';
import d from '../components/gallery/d.jpg';
import e from '../components/gallery/e.jpg';
import momu from '../components/gallery/momu.jpg';

const Artwork = () => {
  return (
    <section className="container mx-auto" style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}>
      <Heading title="Artwork" />
      {/* <div className="w-1/4">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          transitionTime={400}
          swipeable={true}
          dynamicHeight={false}
          className="shadow-lg h-full"
        >
          <div className="carousel-item">
            <Image src={momu} alt="Single" width={200} height={300} className="mx-2" />
          </div>
          <div>
            <Image src={e} alt="Single" width={200} height={300} className="mx-2" />
          </div>
          <div>
            <Image src={d} alt="Single" width={200} height={300} className="mx-2" />
          </div>
          <div>
            <Image src={c} alt="Single" width={200} height={300} className="mx-2" />
          </div>
        </Carousel>
      </div> */}

      <div className="shadow-lg flex flex-col gap-2 px-4 py-5 bg-[#1a1b1fbe] max-w-[1500px] mx-auto py-10">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          transitionTime={400}
          swipeable={true}
          dynamicHeight={false}
          className="shadow-lg h-full"
        >
          <div className="artimg text-white">
            <Image src={a} alt="" height="100%" width="100%" />
            <p className="legend">Welcome to the world of Metora Cliffs</p>
          </div>
          <div className="artimg text-white">
            <Image src={b} alt="" height="100%" width="100%" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Artwork;
