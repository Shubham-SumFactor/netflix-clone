import Head from 'next/head'
import Image from "next/image"
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '../components/banner/banner'
import NavBar from '@/components/nav/navbar'
import Card from '@/components/card/card'
import SectionCards from "../components/card/section-cards"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const disneyVideos = [
    {
      imgUrl:"/static/HP.webp",
    },
    {
      imgUrl:"/static/HP.webp",
    },
    {
      imgUrl:"/static/HP.webp",
    }
  ]
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
         
         <div className={styles.sectionWrapper}>
          <SectionCards  title = "Disney" videos={disneyVideos} size="large"/>
          <SectionCards  title = "Productivity" videos={disneyVideos} size="medium"/>
          </div>

    </div>
  )
}
