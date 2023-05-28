import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from 'next/link'
import { useEffect, useState } from "react";
import Image from 'next/image';
import { magic } from '../../lib/magic-client'

const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [username, setUsername] = useState('');
    const router = useRouter();

    useEffect(() => {
        async function getUsername() {
          try {
            const { email } = await magic.user.getMetadata();
            if (email) {
             // console.log(email);
              setUsername(email);
            }
          } catch (error) {
            console.log("Error retrieving email:", error);
          }
        }
        getUsername();
      }, []);


    const handleOnClickHome = (e) => {
        e.preventDefault()
        router.push('/')

    }
    const handleOnClickMyList = (e) => {
        e.preventDefault()
        router.push('/browse/my-List')
    };

    const handleShowDropdown =(e) =>{
        e.preventDefault()
        setShowDropdown(!showDropdown);

    };
       return( 
        <div className={styles.container}>
            <div className={styles.wrapper}>

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
            

            <ul className={styles.navItems}> 
                <li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
                <li className={styles.navItem2} onClick={handleOnClickMyList}>My List</li>
            </ul>

            
            <nav className={styles.navContainer}>
                <div>
                    <button className={styles.usernameBtn} onClick={handleShowDropdown}>
                        <p> {username} </p>
                        {/* expand more icon */} 
                        <Image                   
                          src="/static/expand_more.svg"
                          width={24}
                          height={24}
                          alt="Expand dropdown"
                     />

                    </button>

                    {showDropdown && (
                    <div className={styles.navDropdown}>
                        <div>
                            <Link href="/login" className={styles.linkName}>
                            Sign out
                            </Link>
                            <div className={styles.lineWrapper}></div>
                        </div>
                    </div> 
                      )};
                </div>
            </nav>
          
            </div>

         </div>      
    )
};

export default Navbar;