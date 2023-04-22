import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from './Heading';
import { artworkImages, photographyImages } from './gallery/allImages';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderImages = (images) => (
    <div className='max-w-full grid grid-cols-6 gap-4'>
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
          <div className='max-w-[500px] shadow-lg bg-[#7192bc] text-white'>
            <div className='relative group'>
              <Image className='image' src={image.src} alt='' />
              <div className='bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500
                group:hover:opacity-100 grid place_items-center text-white'>
                {image.title}
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );

  return (
    <div>
      <section
        className='gallerycontainer mx-auto py-10 px-4'
        style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }}
      >
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      
        <Heading title='Gallery' />
        {selectedCategory && (
          <motion.button
            className='backbtn absolute top-20 mt-20 bg-gray-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-200 ease-in'
            onClick={() => setSelectedCategory(null)}
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
              <p className='text-white text-center mb-4'>Choose between the two options below:</p>
              <div className='flex justify-center space-x-8'>
                <button
                  className='artbtn bg-[#0392cf] text-white text-2xl px-8 py-4 rounded-lg hover:bg-blue-800 transition duration-200 ease-in'
                  onClick={() => handleCategoryClick('artwork')}
                >
                  Artwork
                </button>
                <button
                  className='photobtn bg-[#c471ed] text-white text-2xl px-8 py-4 rounded-lg hover:bg-purple-800 transition duration-200 ease-in'
                  onClick={() => handleCategoryClick('photography')}
                >
                  Photography
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedCategory === 'artwork' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading title='Artwork' />
              {renderImages(artworkImages)}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedCategory === 'photography' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading title='Photography' />
              {renderImages(photographyImages)}
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
    </div>
  );
};

export default Gallery;
