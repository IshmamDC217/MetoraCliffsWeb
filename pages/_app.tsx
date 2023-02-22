import '@/styles/globals.css'
import localFont from '@next/font/local'
import type { AppProps } from 'next/app'
import ParticlesBG from '../components/ParticlesBG'

export default function App({ Component, pageProps, }: AppProps) {
  return (
    <div>
      <ParticlesBG />
      <Component {...pageProps} />
    </div>
  )
}