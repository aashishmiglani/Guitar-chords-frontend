import React from 'react'
import Image from 'next/image';
import pages from "./page.module.css"


const page = () => {
  return (
    <>
      <div className={pages.imageText}>
        <Image src="/Recording-pana.png"
          alt="jhb"
          className={pages.borderWidth}
          width={500}
          height={500}
          priority />
        <div className={pages.text}>
          Open Mics
        </div>
      </div>

    </>
  )
}

export default page