import '@/styles/globals.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { magic } from '../lib/magic-client';

export default function App({ Component, pageProps }) {
  const router = useRouter();
 const [isLoading, setIsLoading] = useState(true);
 
  useEffect(async ()=> {

   const isLoggedIn = await magic.user.isLoggedIn();

   if(isLoggedIn) {
   // setIsLoading(false);
    router.push('/');
   }
   else{
    //setIsLoading(false);
    router.push('/login')
   }
  },[]);

  useEffect(() => {

    const handleComplete = () => {
        setIsLoading(false);
    }

    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
   

    return () => {
    router.events.off('routeChangeComplete', handleComplete);
    router.events.off('routeChangeError', handleComplete);
};
}, [router]);

  return isLoading ? <div>Loading....</div> : 


   <Component {...pageProps} />
}
