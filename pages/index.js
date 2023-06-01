import Head from 'next/head'
import Image from "next/image"
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '../components/banner/banner'
import Navbar from '@/components/nav/navbar'
import Card from '@/components/card/card'
import SectionCards from "../components/card/section-cards"
const inter = Inter({ subsets: ['latin'] })
import { getPopularVideos, getVideos } from '@/lib/videos'
import { startFetchMyQuery } from '@/lib/db/hasura'


export async function getServerSideProps() {
  const disneyVideos =  await getVideos("disney trailer");
  const productivityVideos =  await getVideos("productivity trailer");
  const travelVideos =  await getVideos("travel trailer");
  const popularVideos =  await getPopularVideos();
 

  return { props: 
    { disneyVideos, productivityVideos, travelVideos, popularVideos } };
}

export default function Home( { disneyVideos, productivityVideos, travelVideos, popularVideos } ) {

  startFetchMyQuery();
  return (
    <div className={styles.container}>
      <Head>

        <title>Netflix</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div className={styles.main}>
          <Navbar />
        
          
          <Banner
         // videoId="4zH5iYM4wJo"
         videoId="4zH5iYM4wJo"
          title="Clifford the red dog"
          subTitle="a very cute dog"
          imgUrl="/static/clifford.webp"
          />
         
         <div className={styles.sectionWrapper}>
          <SectionCards  title = "Disney" videos={disneyVideos} size="large"/>
          <SectionCards  title = "Travel" videos={travelVideos} size="small"/>
          <SectionCards  title = "Productivity" videos={productivityVideos} size="medium"/>
          <SectionCards  title = "Popular" videos={popularVideos} size="small"/>

          </div>
          </div>
    </div>
  )
}
