import React from 'react'
import Image from 'next/image'
import socialStyles from "./page.module.css"

const page = () => {
    return (
        <>
            <div className={socialStyles.textImageFlex} >
                <Image src="/Instagram Video Streaming-pana.svg"
                    alt="jhb"
                    className={socialStyles.borderWidth}
                    width={500}
                    height={500}
                    priority />
                <div className={socialStyles.text}>
                    Social Media
                </div>
            </div>
        </>
    )
}

export default page