import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'
import MCbandpic from '../components/MCbandpic.jpg'

const ContactUs = () => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <section className='max-w-[700px]' style={{ display: 'flex', alignContent:'center' }}>
      <motion.div className="contactus bg-[#58629c] p-16 py-16 rounded-md shadow-lg max-w-[900px] ml-60">
        <h2 className="text-2xl text-white font-bold mb-6">Contact Us</h2>
        <form className="space-y-4">
          <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 p-2 rounded"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 p-2 rounded"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col">
            <label htmlFor="message" className="text-white">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="border border-gray-300 p-2 rounded"
            ></textarea>
          </motion.div>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            type="submit"
            className="bg-gray-800 text-white py-2 px-4 rounded"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
      <Image class="image border-[20px] rounded-[5px] border-white" src={MCbandpic} alt="" />
    </section>
  );
};

export default ContactUs;
