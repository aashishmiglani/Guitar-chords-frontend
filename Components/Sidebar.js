import React from 'react'
import Search from './Search'
import { AiOutlineMenu } from 'react-icons/ai';
import styles from "./Sidebar.module.css"

const Sidebar = () => {
    return (
        <>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">            <AiOutlineMenu /></button>
            <div className={styles.search_flex}>
                <div class="offcanvas offcanvas-end" style={{ width: "35%" }} tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasRightLabel">Search Songs</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <Search />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar