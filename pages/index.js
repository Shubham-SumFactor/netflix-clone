import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '../components/banner/banner'
import Navbar from '@/components/nav/navbar'

import SectionCards from "../components/card/section-cards"
const inter = Inter({ subsets: ['latin'] })
import { getPopularVideos, getVideos, getWatchItAgainVideos } from '@/lib/videos'



export async function getServerSideProps() {

  const userId = "did:ethr:0x05ca5E2CB942eb64bD92B863cd20EB562B78cE91";
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJkaWQ6ZXRocjoweDA1Y2E1RTJDQjk0MmViNjRiRDkyQjg2M2NkMjBFQjU2MkI3OGNFOTEiLCJwdWJsaWNBZGRyZXNzIjoiMHgwNWNhNUUyQ0I5NDJlYjY0YkQ5MkI4NjNjZDIwRUI1NjJCNzhjRTkxIiwiZW1haWwiOiJzaHViaGFtLnN1bWZhY3RvckBnbWFpbC5jb20iLCJvYXV0aFByb3ZpZGVyIjpudWxsLCJwaG9uZU51bWJlciI6bnVsbCwid2FsbGV0cyI6W10sImlhdCI6MTY4NTcwOTM2NCwiZXhwIjoxNjg2MzE0MTY0LCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJ4LWhhc3VyYS11c2VyLWlkIjoiZGlkOmV0aHI6MHgwNWNhNUUyQ0I5NDJlYjY0YkQ5MkI4NjNjZDIwRUI1NjJCNzhjRTkxIn19.OnYxfhsN_vmwLus9cCMGusVVePBYYssr4xbWAlquvMc";
  const watchItAgainVideos = await getWatchItAgainVideos(userId, token);
  console.log( { watchItAgainVideos } );
  const disneyVideos =  await getVideos("disney trailer");
  const productivityVideos =  await getVideos("productivity trailer");
  const travelVideos =  await getVideos("travel trailer");
  const popularVideos =  await getPopularVideos();
 

  return { props: 
    { disneyVideos, productivityVideos, travelVideos, popularVideos, watchItAgainVideos } };
}

export default function Home( { disneyVideos, productivityVideos, travelVideos, popularVideos, watchItAgainVideos } ) {


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
          <SectionCards  title = "Watch It Again" videos={watchItAgainVideos} size="small"/>
          <SectionCards  title = "Travel" videos={travelVideos} size="small"/>
          <SectionCards  title = "Productivity" videos={productivityVideos} size="medium"/>
          <SectionCards  title = "Popular" videos={popularVideos} size="small"/>

          </div>
          </div>
    </div>
  )
}
