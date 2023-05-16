import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Work from "../components/Work"
import AboutUs from "../components/AboutUs"
import OurContent from "../components/OurContent"
import Skills from "../components/Skills"
import SkillsMob from "../components/SkillsMob"
import ParticlesBG from '../components/ParticlesBG'
import ContactUs from '../components/ContactUs'
import Sidemenu from '../components/Sidemenu'
import Footer from '../components/Footer'
import { useState } from 'react'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head>
        <title>Metora Cliifs</title>
        <link rel="icon" href="/bannerpart.png" />

      </Head>

      <header>
        <Navbar toggleSidebar={toggleSidebar} />
      </header>

      <main>
        <Banner />
        <p>&nbsp;</p>
        <Work />
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <AboutUs />
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <OurContent />
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <Skills />
        <SkillsMob />
        <ContactUs />
        <ParticlesBG />
        <button onClick={toggleSidebar}></button>
        {isOpen && (
          <div
            className={`sidemenu-container ${isOpen ? 'open' : ''}`}
            onClick={toggleSidebar}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
            }}
          >
            <Sidemenu isOpen={isOpen} toggleSidebar={toggleSidebar} />
          </div>
        )}
        <Footer />
      </main>

    </div>
  )
}
