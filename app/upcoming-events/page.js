import React from 'react'
import eventsStyle from "./page.module.css"
import Image from 'next/image'

const page = () => {
    return (
        <>

            <div className={eventsStyle.textImageFlex} >
                <Image src="/Playlist-rafiki.png"
                    alt="jhb"
                    className={eventsStyle.borderWidth}
                    width={500}
                    height={500}
                    priority />
                <h4 className={eventsStyle.text}>
                    Upcoming Events
                </h4>
            </div>

        </>
    )
}

export default page