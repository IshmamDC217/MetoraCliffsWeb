import Head from 'next/head'
import Navbar from "../components/Navbar"
import Gallery from '../components/Gallery'
import ParticlesBG from '../components/ParticlesBG'
import Footer from '../components/Footer'

export default function GalleryPage() {
  return (
    <div>
      <Head>
        <title>Metora Cliifs | Gallery</title>
        <meta name="description" content="Gallery page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
        {/* <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p> */}
      </header>

      <main>
        <Gallery/>
        <ParticlesBG />
        <Footer />
      </main>
    </div>
  )
  }