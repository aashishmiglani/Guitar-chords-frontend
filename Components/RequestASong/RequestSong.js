import React from 'react'
import styles from "./RequestSong.module.css"
import Image from 'next/image';
import 'typeface-abril-fatface'


const RequestSong = () => {
    return (
        <>

            <div className={styles.flexBodyCenter}>
                <div className={styles.verticalIcons}>
                    <Image
                        src="/music-note-png-1.png"
                        alt="Vercel Logo"
                        className={styles.musicNotes}
                        // className={"img-fluid"}
                        width={300}
                        height={300}
                        priority
                    />



                    <Image
                        src="/music-Note.png"
                        alt="Vercel Logo"
                        className={styles.musicNotesTwo}
                        // className={"img-fluid"}
                        width={200}
                        height={350}
                        priority
                    />

                    {/* <Image
                        src="/1008-10084577_music-notes-vector-png-red-music-icon-png.png"
                        alt="Vercel Logo"
                        className={styles.musicNotesTwo}
                        // className={"img-fluid"}
                        width={200}
                        height={350}
                        priority
                    /> */}
                </div>
                <div className={styles.formSubmit}>
                    <div className={styles.text} style={{ fontFamily: 'Abril Fatface, cursive' }}>
                        Request a Song
                    </div>

                    <div className={styles.inputLabel}>
                        <div className={styles.songInput}>
                            <label>Song Name</label>
                            <input className={styles.inputField} type='text' placeholder='Song Name'></input>
                        </div>

                        <div className={styles.singerInput}>
                            <label>Singer Name</label>
                            <input className={styles.inputField} type='text' placeholder='Singer Name'></input>
                        </div>
                    </div>
                    <div className={styles.buttonDiv}>
                        <button className={styles.buttonStyle}>Submit</button>
                    </div>
                </div>
            </div>



        </>
    )
}

export default RequestSong