import Head from 'next/head'
import Navbar from "../components/Navbar"
import OurContent from '../components/OurContent'
import ParticlesBG from '../components/ParticlesBG'
import Footer from '../components/Footer'
import Sidemenu from '../components/Sidemenu'
import { useState } from 'react'

export default function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head>
        <meta name="description" content="Songs page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar toggleSidebar={toggleSidebar} />
      </header>

      <main>
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
        {isOpen && (
          <div
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
        <OurContent />
        <ParticlesBG />
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <Footer />
      </main>
    </div>
  )
}