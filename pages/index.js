import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '../components/banner/banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>

        <title>Netflix</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <h1>Netflix</h1>

          <Banner
          title="Harry Potter"
          subTitle="Mysterious Rise"
          imgUrl="/static/HP.webp"
          />
         {/* 
         <Nav Bar
         <Card />
      */}
    </div>
  )
}
