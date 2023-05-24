import React from 'react'
import Image from 'next/image'
import enjoyStyles from "./page.module.css"

const page = () => {
    return (
        <>
            <div className={enjoyStyles.textImageFlex}>
                <Image src="/Headphone-cuate.svg"
                    alt="jhb"
                    className={enjoyStyles.borderWidth}
                    width={500}
                    height={500}
                    priority />
                <div className={enjoyStyles.text}>
                    Enjoy Online  Music
                </div>
            </div>

        </>
    )
}

export default page