import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from 'next/link'
import { useEffect, useState } from "react";
import Image from 'next/image';
import { magic } from '../../lib/magic-client'

const Navbar = () => {
    const [username, setUsername] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const router = useRouter();

    useEffect(() => {
        async function logout() {
          try {
            const { email, issuer } = await magic.user.getMetadata();
           const didToken = await magic.user.getIdToken();
            console.log({ didToken });
            if (email) {
             // console.log(email);
              setUsername(email);
            }
          } catch (error) {
            console.log("Error retrieving email:", error);
          }
        }
        logout();
      }, []);

 

    const handleOnClickHome = (e) => {
        e.preventDefault();
        router.push('/');

    };
    const handleOnClickMyList = (e) => {
        e.preventDefault();
        router.push('/browse/my-List');
    };

    const handleShowDropdown =(e) =>{
        e.preventDefault();
        setShowDropdown(!showDropdown);

    };

    const handleSignOut = async (e) => {
        e.preventDefault();

        try {
            await magic.user.logout();
            console.log(await magic.user.isLoggedIn()); // => `false`
            router.push("/login")
        } catch(error) {
            // Handle errors if required!
            console.log("Error logging out:", error);
            router.push("/login")
          }
    };
       return( 
        <div className={styles.container}>
            <div className={styles.wrapper}>

                <a className={styles.logoLink}>
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
                            <a  onClick={handleSignOut} className={styles.linkName}>
                            Sign out
                            </a>
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