import Image from 'next/image'
import Head from 'next/head'
import Header from "../components/header"
import Mainview from '@/components/mainview'
import Aboutme from '@/components/aboutme'
import Skills from '@/components/skills'
import Portfolio from '@/components/portfolio'
import Contact from '@/components/contact'
import Footer from '@/components/Footer'
import Backtotop from '@/components/backtotop'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main>
        {/* <Head>
          <title>Digital Marketing</title>
          <meta property="og:title" content="My page title" key="title" />
        </Head> */}
       <Header />
       <Mainview />
       <Aboutme />
       <Skills />
       <Portfolio />
       <Contact />
       <Footer />
       <Backtotop />
    </main>
  )
}
