import Head from "next/head";
import styles from "../styles/Login.module.css"
import Image from "next/image"

const Login = () => {

    return <div>
              <Head>
        <title>Netflix SignIn</title>
      </Head>
    
    <header>
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

    </div>
}

export default Login;