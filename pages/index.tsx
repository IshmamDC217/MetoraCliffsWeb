import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Work from "../components/Work"
import AboutUs from "../components/AboutUs"
import OurContent from "../components/OurContent"
import Skills from "../components/Skills"
import ParticlesBG from '../components/ParticlesBG'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Metora Cliifs</title>
        <link rel="icon" href="/bannerpart.png" />
        {/* <link rel="stylesheet" href="global.css" /> */}

      </Head>

      <header>
        <Navbar/>
      </header>

      <main>
        <Banner />
        <Work />
        <AboutUs />
        <OurContent />
        <Skills />
        <ContactUs />
        <ParticlesBG />
        <Footer />
      </main>

    </div>
  )
}
