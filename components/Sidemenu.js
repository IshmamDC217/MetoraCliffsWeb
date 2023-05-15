import React from 'react';
import { motion } from 'framer-motion';
import { AiFillCloseCircle } from 'react-icons/ai';

const Sidemenu = ({ isOpen, toggleSidebar }) => {
  const menuVariants = {
    hidden: {
      x: '-100%',
    },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const menuItemVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className={`w-screen h-screen fixed top-0 left-0 bg-gray-800 z-20 text-white grid place-items-center`}
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      variants={menuVariants}
    >
      <motion.div
        className="absolute top-0 right-0 text-lg hover:cursor-pointer mt-2 mr-2"
        onClick={toggleSidebar}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={menuItemVariants}
      >
        <AiFillCloseCircle />
      </motion.div>

      <motion.div
        className="flex flex-col gap-4 text-[28px]"
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={menuVariants}
      >
        <motion.a
          className="hover:text-gray-500"
          href="/"
          variants={menuItemVariants}
        >
          <motion.span variants={menuItemVariants}>Home</motion.span>
        </motion.a>
        <motion.a
          className="hover:text-gray-500"
          href="/songs"
          variants={menuItemVariants}
        >
          <motion.span variants={menuItemVariants}>Songs</motion.span>
        </motion.a>
        <motion.a
          className="hover:text-gray-500"
          href="/about"
          variants={menuItemVariants}
        >
          <motion.span variants={menuItemVariants}>About</motion.span>
        </motion.a>
        <motion.a
          className="hover:text-gray-500"
          href="/gallery"
          variants={menuItemVariants}
        >
          <motion.span variants={menuItemVariants}>Gallery</motion.span>
        </motion.a>
        <motion.a
          className="hover:text-gray-500"
          href="/contact"
          variants={menuItemVariants}
        >
          <motion.span variants={menuItemVariants}>Contact</motion.span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Sidemenu;
