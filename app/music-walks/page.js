import React from 'react'
import Image from 'next/image'
import walkStyles from "./page.module.css"

const page = () => {
    return (
        <>
            <div className={walkStyles.textImageFlex} >
                <Image src="/Walking around-amico.svg"
                    alt="jhb"
                    className={walkStyles.borderWidth}
                    width={500}
                    height={500}
                    priority />
                <div className={walkStyles.text}>
                    Music Walk
                </div>
            </div>

        </>
    )
}

export default page