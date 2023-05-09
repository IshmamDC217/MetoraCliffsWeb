import React, { useState, useEffect } from 'react';
import CustomNotification from './CustomNotification';
import { motion } from "framer-motion";
import Image from "next/image"
import MCbandpic from "../components/MCbandpic.jpg"
import Heading from "./Heading"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import nbandpic from '../components/gallery/nbandpic.jpg'

const ContactUs = () => {
  const [showNotification, setShowNotification] = useState(false);

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  useEffect(() => {
    setShowNotification(true);

    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="notif">
        {showNotification && (
          <CustomNotification
            message="🖼️ Don&apos;t miss out on our Gallery!"
            onClose={() => setShowNotification(false)}
          />
        )}
      </div>
      <section className="container mx-auto py-16 mt-20">

        <Heading title="Contact Us" style={{ fontFamily: 'Adventure Subtitles', sansSerif: true }} />
        <div className="contact-form-and-image flex flex-wrap justify-center mt-10 gap-10 mr-1.5 ml-1">
          <motion.div className="contactus bg-[#58629c] p-14 py-16 rounded-md border w-[75%] mb-10" whileHover={{ y: -5 }}>
            <h2 className="text-2xl text-white font-bold mb-6">Don&apos;t worry, we don&apos;t bite!</h2>
            <form className="space-y-4">
              <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col">
                <label htmlFor="name" className="text-white mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 p-2 rounded"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col">
                <label htmlFor="email" className="text-white mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  whileHover={{ scale: 1.02 }}
                  className="border border-gray-300 p-2 rounded"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col">
                <label htmlFor="message" className="text-white mb-1">
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
                className="bg-gray-800 text-white py-2 px-4 rounded mt-6"
              >
                Send Message
              </motion.button>
              <div className="contact-socials text-white flex justify-center items-center gap-5 mt-10">
                <p>Alternatively, you can contact us on:</p>
                <a href="https://facebook.com/metoracliffs" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://instagram.com/metoracliffsmusic" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://tiktok.com/@metoracliffs" rel="noopener noreferrer"><FaTiktok /></a>
              </div>
            </form>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: "column" }}>
            <div className="license contactus-image max-w-sm w-half">
              <Image src={MCbandpic} alt="" className="rounded-lg" />
            </div>
            <div className="license contactus-image max-w-sm w-half">
              <Image src={nbandpic} alt="" className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="dyllicensed contact-footer mt-10 text-white">
          <p>&copy; 2023 Dylan Tann, Metora Cliffs. All rights reserved</p>
        </div>
        <div className="dyllicense contact-footer mt-10 text-white">
          <p>&nbsp; &copy; 2023 Dylan Tann, Metora Cliffs. All rights reserved</p>
          {/* <p>Designed and Developed by Ishmam Ahmed.</p> */}
        </div>
      </section>
    </>
  );
};
export default ContactUs;
