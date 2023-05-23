import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        
        <title>Netflix</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <h1>Netflix</h1>
    </div>
  )
}
