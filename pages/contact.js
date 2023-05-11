import Head from 'next/head'
import Navbar from "../components/Navbar"
import ContactUs from '../components/ContactUs'
import ParticlesBG from '../components/ParticlesBG'
import Footer from '../components/Footer'

export default function GalleryPage() {
  return (
    <div>
      <Head>
        <meta name="description" content="Contact page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <ContactUs/>
        <ParticlesBG />
        <Footer />
      </main>
    </div>
  )
  }