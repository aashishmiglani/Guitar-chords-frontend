import React from 'react'
import Search from './Search'
import Image from 'next/image';
import styles from "./Homepage.module.css"
import RequestSong from './RequestASong/RequestSong';


export const Homepage = () => {
    return (
        <>
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


                <div className={styles.textImageFlex} >
                    <Image src="/Recording-pana.png"
                        alt="jhb"
                        className={styles.borderWidth}
                        width={120}
                        height={120}
                        priority />
                    <h4 className={styles.text}>
                        Learn Music
                    </h4>
                </div>

                <div className={styles.textImageFlex} >
                    <Image src="/Playlist-rafiki.png"
                        alt="jhb"
                        className={styles.borderWidth}
                        width={120}
                        height={120}
                        priority />
                    <h4 className={styles.text}>
                        Learn Music
                    </h4>
                </div>


                <div className={styles.textImageFlex} >
                    <Image src="/Walking around-amico.svg"
                        alt="jhb"
                        className={styles.borderWidth}
                        width={120}
                        height={120}
                        priority />
                    <h4 className={styles.text}>
                        Music Walk
                    </h4>

                </div>


                <div className={styles.textImageFlex} >
                    <Image src="/Instagram Video Streaming-pana.svg"
                        alt="jhb"
                        className={styles.borderWidth}
                        width={120}
                        height={120}
                        priority />
                    <h4 className={styles.text}>
                        Follow Our Socials
                    </h4>

                </div>



                <div className={styles.textImageFlex} >
                    <Image src="/Headphone-cuate.svg"
                        alt="jhb"
                        className={styles.borderWidth}
                        width={120}
                        height={120}
                        priority />
                    <h4 className={styles.text}>
                        Enjoy Online  Music
                    </h4>

                </div>



            </div>
            <div className={styles.centerText}>Search for Songs</div>
            <div className={styles.centerSearch}>
                <div className={styles.searchBar}>

                    <Search />
                </div>
            </div>

            <RequestSong />




        </>
    )
}
