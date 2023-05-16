"use client"
import React from 'react'
import Sidebar from './Sidebar'
import styles from "./Navbar.module.css"


const Navbar = () => {

    return (
        <>
            <div className={styles.navBar}>
                {/* <div className='Flex-end' style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row-reverse",
                    justifyContent: "space-between"
                }}> */}
                <Sidebar />

                <nav class="navbar navbar-expand-lg" style={{ width: "100%" }}>
                    <div class="container-fluid">
                        <ul class="nav nav-pills">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="pill" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="pill" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="pill" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="pill" href="#">Contact</a>
                            </li>
                        </ul>

                    </div>
                </nav>
                {/* </div> */}
            </div>







        </>
    )
}

export default Navbar