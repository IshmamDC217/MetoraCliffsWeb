import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import bannerpart from '../components/bannerpart.png';

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const openTerms = () => {
    setShowTerms(true);
  };

  const closeTerms = () => {
    setShowTerms(false);
  };

  const openPrivacyPolicy = () => {
    setShowPrivacyPolicy(true);
  };

  const closePrivacyPolicy = () => {
    setShowPrivacyPolicy(false);
  };

  return (
    <footer className="bg-gray-900 py-8">
      <div className="licensecontainer mx-auto px-4">
        <div className="flex justify-center py-2">
          <a href="https://instagram.com/metoracliffsmusic" rel="noopener noreferrer" className="mx-4">
            <AiFillInstagram className="text-3xl" style={{ color: '#962fbf' }} />
          </a>
          <a href="https://youtube.com/@metoracliffs5994" rel="noopener noreferrer" className="mx-4">
            <AiFillYoutube className="text-3xl" style={{ color: '#c4302b' }} />
          </a>
          <a href="https://facebook.com/metoracliffs" rel="noopener noreferrer" className="mx-4">
            <AiFillFacebook className="text-3xl" style={{ color: '#3b5998' }} />
          </a>
          <a href="https://tiktok.com/@metoracliffs" rel="noopener noreferrer" className="mx-4">
            <FaTiktok className="text-3xl" style={{ color: '#00f2ea' }} />
          </a>
          <a href="https://open.spotify.com/artist/7L8GCBu7rpT4nWglH7d0X6" rel="noopener noreferrer" className="mx-4">
            <FaSpotify className="text-3xl" style={{ color: '#1db954' }} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          <div className="liclogo flex items-center">
            <Image
              src={bannerpart}
              width="25%"
              height="25%"
              alt="Metora Cliffs"
              className="pr-8 lg:pr-0"
              style={{ inlineSize: '150px' }}
            />

            <p className="text-white text-xl font-bold text-center">Metora Cliffs</p>
          </div>
          <p className="moblicense text-gray-400 text-sm mr-0 lg:mr-10 mt-0 lg:mt-4 text-center">&copy; 2023 Licensed by Ishmam Ahmed. All rights reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="license text-white hover:text-gray-400 transition duration-300" onClick={openTerms}>
              Terms of Use
            </a>
            <a href="#" className="license text-white hover:text-gray-400 transition duration-300" onClick={openPrivacyPolicy}>
              Privacy Policy
            </a>
            <a href="#" className="ishlicense text-white hover:text-gray-400 transition duration-300 text-center">
              &copy; 2023 Licensed by Dylan Tann
            </a>
          </div>
        </div>

        {/* Terms of Use Pop-up */}
        {showTerms && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 max-w-md">
              {/* Terms of Use content */}
              <h2 className="text-xl font-bold mb-4">Terms of Use</h2>
              <p>This website is owned and operated by Metora Cliffs. By accessing and using this website, you agree to be bound by the following terms and conditions:</p>
              <p>- The content of this website is for informational purposes only and may be subject to change without notice.</p>
              <p>- Unauthorized use of any materials or content on this website may violate copyright laws and other applicable regulations.</p>
              <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded" onClick={closeTerms}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* Privacy Policy Pop-up */}
        {showPrivacyPolicy && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 max-w-md">
              {/* Privacy Policy content */}
              <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
              <p>This Privacy Policy outlines how we collect, use, and protect your personal information when you visit this website:</p>
              <p>- We may collect personal information, such as your name and email address, when you sign up for our newsletter or contact us through the website.</p>
              <p>- We will never sell or share your personal information with third parties without your consent, except as required by law.</p>
              <p>- We use cookies and similar technologies to enhance your browsing experience and collect information about how you use the website.</p>
              <p>- By using this website, you consent to the collection and use of your personal information as described in this Privacy Policy.</p>
              <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded" onClick={closePrivacyPolicy}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;

