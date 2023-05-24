import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '../components/banner/banner'
import NavBar from '@/components/nav/navbar'
import Card from '@/components/card/card'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>

        <title>Netflix</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      
          <NavBar username="TomRiddle@hogwartz.com"/>
          <Banner
          title="Harry Potter"
          subTitle="Mysterious Rise"
          imgUrl="/static/HP.webp"
          />
         
         <Card imgUrl='/static/HP.webp'
          size="large" />
         
         <Card imgUrl='/static/HP.webp'
          size="medium" />

         <Card imgUrl='/static/HP.webp'
          size="small" />
    </div>
  )
}
