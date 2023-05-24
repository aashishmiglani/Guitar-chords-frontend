import React from 'react'
import Image from 'next/image'
import socialStyles from "./page.module.css"
import Link from 'next/link'

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
                <div className={socialStyles.imageText}>

                    <Link href="https://www.instagram.com/aashishportraits/" style={{ textDecoration: "none", color: "blue" }} target="_blank" >
                        <div className={socialStyles.socialLogoText}>
                            <Image src="/instagram.png"
                                alt="jhb"
                                className={socialStyles.borderWidth}
                                width={45}
                                height={45}
                                priority />
                            <div style={{ fontSize: "20px" }}>@aashishportaits</div>
                        </div>
                    </Link>

                    <Link href="https://www.youtube.com/" style={{ textDecoration: "none", color: "blue" }} target="_blank" >
                        <div className={socialStyles.socialLogoText}>
                            <Image src="/youtube_318-566773.png"
                                alt="jhb"
                                className={socialStyles.borderWidth}
                                width={55}
                                height={50}
                                priority />
                            <div style={{ fontSize: "20px" }}>Aashish Miglani</div>
                        </div>
                    </Link>


                    <Link href="https://www.linkedin.com/in/aashishmiglani/" style={{ textDecoration: "none", color: "blue" }} target="_blank" >
                        <div className={socialStyles.socialLogoText}>
                            <Image src="/linkedin-symbol-logo-22.png"
                                alt="jhb"
                                className={socialStyles.borderWidth}
                                width={45}
                                height={45}
                                priority />
                            <div style={{ fontSize: "20px" }}>Aashish Miglani</div>
                        </div>
                    </Link>


                    <div className={socialStyles.text}>
                        Social Media
                    </div>
                </div>
            </div>


        </>
    )
}

export default page