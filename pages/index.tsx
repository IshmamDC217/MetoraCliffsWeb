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
        <Footer />
      </main>

    </div>
  )
}
