import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from './Heading';
import { artworkImages, photographyImages } from './gallery/allImages';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    onRest: () => {
      toast.dark('🏆 Achievement Unlocked: Visited the Gallery');
    },
  });

  const renderImages = (images) => (
    <div className='gallery-grid'>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 400: 2, 900: 3, 1100: 5 }}
      >
        <Masonry style={{alignItems: "baseline"}} gutter="0.5em">
          {images.map((image, index) => (
            <motion.a
              key={index}
              className='card_img scale-90 hover:scale-100 ease-in duration-200 cursor-pointer'
              onClick={() => setSelectedImage(image)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className='shadow-lg image'>
                <div className='relative group'>
                  <Image className='image' src={image.src} alt={image.title} />
                </div>
              </div>
            </motion.a>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );

  return (
    <div>
      <section
        className='gallerycontainer mx-auto py-10 px-4'
      >
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <Heading title='Gallery' />
        {selectedCategory && (
          <motion.button
            className='backbtn absolute top-20 mt-20 bg-gray-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-200 ease-in'
            onClick={() => setSelectedCategory(null)}
            style={{ zIndex: 10 }}
          >
            Go Back
          </motion.button>
        )}

        <AnimatePresence>
          {!selectedCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className='text-white text-center mb-4'>Check out our <strong className='text-[20px] text-[#0290bc]'>Artwork</strong> or our <strong className='text-[20px] text-[#b267e1]'>Photography</strong> by clicking one of the two options below:</p>
              <div className='artwork flex justify-center'>
                <button
                  className='artbtn bg-[#0279ac] text-white text-2xl rounded-lg hover:bg-blue-800 transition duration-200 ease-in'
                  onClick={() => handleCategoryClick('artwork')}
                >
                  Artwork
                </button>
                <button
                  className='photobtn bg-[#b267e1] text-white text-2xl rounded-lg hover:bg-purple-800 transition duration-200 ease-in'
                  onClick={() => handleCategoryClick('photography')}
                >
                  Photography
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className='text-white text-center mb-4'>
                Click on any image to read it&apos;s <strong className='text-[20px] text-[#e8880d]'>History</strong> at the bottom.
              </p>
              {selectedCategory === 'artwork' && <Heading title='Artwork' />}
              {selectedCategory === 'photography' && <Heading title='Photography' />}
              {renderImages(selectedCategory === 'artwork' ? artworkImages : photographyImages)}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className='mt-10'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className='bg-black p-2'>
                <Image src={selectedImage.src} alt={selectedImage.title} />
              </div>
              <p className='text-white text-center mt-2'>{selectedImage.title}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <ToastContainer progressClassName="toastProgress" position='bottom-right' />
    </div>
  );
};

export default Gallery;