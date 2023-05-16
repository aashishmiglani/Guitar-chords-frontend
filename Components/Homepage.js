import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Image from 'next/image';
import styles from "./Homepage.module.css"


export const Homepage = () => {
    return (
        <>
            <Navbar />
            <div className={styles.flex_Ho} >
                <div>
                    <Image
                        src="/music-bro.svg"
                        alt="Vercel Logo"
                        className={styles.responseive_image}
                        // className={"img-fluid"}
                        width={700}
                        height={24}
                        priority
                    />
                </div>


                <div className={styles.animation_container} >
                    <h1 className={styles.animation_text}>Welcome to My Website <br></br>All chords</h1>
                </div>
            </div>



            <div className={styles.centerImages}>
                <Image src="/Recording-pana.png"
                    alt="jhb"
                    className={styles.borderWidth}
                    width={100}
                    height={100}
                    priority />


                <Image src="/Playlist-rafiki.png"
                    alt="jhb"
                    className={styles.borderWidth}
                    width={100}
                    height={100}
                    priority />


                <Image src="/Boombox-pana.png"
                    alt="jhb"
                    className={styles.borderWidth}
                    width={100}
                    height={100}
                    priority />

            </div>




        </>
    )
}
