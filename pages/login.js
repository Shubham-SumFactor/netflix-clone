import Head from "next/head";
import styles from "../styles/Login.module.css"
import Image from "next/image"
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {

    const [email, setEmail] = useState("");
    const [userMsg, setUserMsg] = useState('');
    const router = useRouter();

    const handleOnChangeEmail = (e) => {
        setUserMsg("");
        console.log("event", e);
        const email = e.target.value;
      setEmail(email);
    };

    const handleLoginWithEmail =(e) => {
        console.log("Hi button") ;
        e.preventDefault();

        if(email) {
            if( email === "shubham.sumfactor@gmail.com"){
                        // return dashboard
                        router.push("/");


        } else {
            setUserMsg(" Something went wrong logging in");
        }    
     }   else {
            //show user message
            setUserMsg("Enter a valid e-mail address");
        }


    }

    return <div className={styles.container}>
              <Head>
        <title>Netflix SignIn</title>
      </Head>
    
    <header className={styles.header}> 
        <div className={styles.headerWrapper}>
               <a className={styles.logoLink} href='/'>
                    <div className={styles.logoWrapper}>
                      <Image
                          src="/static/netflix.svg"
                          width={128}
                          height={34}
                          alt="Netflix Logo"
                     />

                    </div>
                </a>
                </div>
    </header>                
                <main className={styles.main}>
                    <div className={styles.mainWrapper}>
                        <h1 className={styles.signinHeader}>Sign In</h1>

                         <input 
                             type="text" 
                                 placeholder="Email Address" 
                              className={styles.emailInput}
                              onChange={handleOnChangeEmail}
                           />

                           <p className={styles.userMsg}>{userMsg}</p>
                    
                         <button onClick={handleLoginWithEmail}
                                className={styles.loginBtn}> Sign In
                         </button>
                    </div>
                </main>


    </div>
}

export default Login;