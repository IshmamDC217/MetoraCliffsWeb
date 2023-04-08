import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Work from "../components/Work"
import AboutUs from "../components/AboutUs"
import OurContent from "../components/OurContent"
import Skills from "../components/Skills"
import Gallery from "../components/Gallery"
import Artwork from "../components/Artwork"
import ParticlesBG from '../components/ParticlesBG'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Metora Cliifs | Leeds Band</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="stylesheet" href="global.css" />
        <script src='App.js'/>

      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <Banner />
        <Work />
        <AboutUs />
        <OurContent />
        <Skills />
        <Gallery />
        <Artwork />
        <ParticlesBG />
      </main>

    </div>
  )
}
