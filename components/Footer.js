import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="licensecontainer mx-auto px-4">
        <div className="flex justify-center py-2">
          <a href="https://instagram.com/metoracliffsmusic" target="_blank" rel="noopener noreferrer" className="mx-4">
            <AiFillInstagram className="text-[#962fbf] text-3xl" />
          </a>
          <a href="https://youtube.com/@metoracliffs5994" target="_blank" rel="noopener noreferrer" className="mx-4">
            <AiFillYoutube className="text-[#c4302b] text-3xl" />
          </a>
          <a href="https://facebook.com/metoracliffs" target="_blank" rel="noopener noreferrer" className="mx-4">
            <AiFillFacebook className="text-[#3b5998] text-3xl" />
          </a>
          <a href="https://tiktok.com/@metoracliffs" target="_blank" rel="noopener noreferrer" className="mx-4">
            <FaTiktok className="text-[#00f2ea] text-3xl" />
          </a>
          <a href="https://open.spotify.com/artist/7L8GCBu7rpT4nWglH7d0X6" target="_blank" rel="noopener noreferrer" className="mx-4">
            <FaSpotify className="text-[#1db954] text-3xl" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="liclogo flex items-center">
            <img src="/bannerpart.png" alt="Metora Cliffs logo" className="w-19 h-12 mr-4" />
            <p className="text-white text-xl font-bold">Metora Cliffs</p>
          </div>
          <div className="flex items-center mt-4 ">
            <p className="moblicense text-gray-400 text-sm pr-80">&copy; 2023 Licensed by Ishmam Ahmed. All rights reserved</p>
            <div className="flex space-x-4">
              <a href="#" className="license text-white hover:text-gray-400 transition duration-300">Terms of Use</a>
              <a href="#" className="license text-white hover:text-gray-400 transition duration-300">Privacy Policy</a>
              <a href="#" className="ishlicense text-white hover:text-gray-400 transition duration-300 px-7">@ 2023 Licensed by Ishmam Ahmed</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
