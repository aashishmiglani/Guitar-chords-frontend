"use client"

import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchThunkData } from '@/Store/dataSlice'
import { fetchSearch } from '@/Store/dataSlice'
import styles from "./Search.module.css"
// import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios'
import { MdOutlineNavigateNext } from 'react-icons/md';
import { eslint } from '@/next.config'


const Search = () => {

    const dispatch = useDispatch()
    const { data, status } = useSelector((state) => state.allData)
    const [songData, setSongsData] = useState(data)
    const [input, setInput] = useState()
    // const router = useRouter();
    const throttling = useRef(false)
    const [searchDropdown, setSearchDropdown] = useState()
    const inputRef = useRef()



    useEffect(() => {
        let pageNo = 1
        let pageLimit = 5
        dispatch(fetchThunkData(pageNo, pageLimit))
    }, [])



    let paginationData = []

    if (data.totalPages !== null && data.totalPages >= 0)
        for (let i = 1; i <= data?.totalPages; i++) {
            paginationData.push(i)

        }


    useEffect(() => {
        setSongsData(data)

    }, [data])


    const handleSong = (songId) => {
    }


    const fetchNewData = (pageNumber) => {
        // let pageNo = 1
        let pageLimit = 5

        if (input) {
            dispatch(fetchSearch(searchDropdown, input, pageNumber, pageLimit))
        }


        else {
            dispatch(fetchThunkData(pageNumber, pageLimit))
        }
    }




    const nextPage = () => {

        let pageLimit = 5

        if (input) {
            dispatch(fetchSearch(searchDropdown, input, data.next, pageLimit))

        }
        else {

            if (data.totalPages >= data.next) {

                dispatch(fetchThunkData(data.next, pageLimit))
            }
        }

    }

    const previousPage = () => {

        if (input) {
            dispatch(fetchSearch(searchDropdown, input, currentPage, data.limit))
        }
        else {
            let pageLimit = 5
            // if (data.totalPages >= data.previous)
            dispatch(fetchThunkData(data.previous, pageLimit))
            // console.log("pageNumber", data.previous)
        }


    }

    const searchData = (event) => {
        event.preventDefault()
        let currentPage = data.next - 1
        dispatch(fetchSearch(searchDropdown, input, currentPage, data.limit))

    }

    let getDropdown = (e) => {


        setSearchDropdown(e.target.value)
    }
    // const handleInput = (e) => {
    //     setInput(e.target.value)
    // }


    const handleThrottleSearch = (e) => {
        setInput(e.target.value)
        if (throttling.current) {
            return
        }
        // If there is no search term, do not make API call
        if (!inputRef.current.value.trim()) {
            return
        }
        throttling.current = true
        setTimeout(() => {
            throttling.current = false
            let currentPage = data.next - 1
            if (searchDropdown) {
                if (e.target.value)
                    dispatch(fetchSearch(searchDropdown, e.target.value, currentPage, data.limit))
                else
                    dispatch(fetchThunkData(1, 5))
            }
        }, 600)
    }
    useEffect(() => {
        if (!input)
            dispatch(fetchThunkData(1, 5))



    }, [input])


    return (
        <>
            <div className={styles.Search}>
                <form class="form-inline" style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                    <input ref={inputRef} onChange={handleThrottleSearch} class="form-control mr-sm-2" style={{ border: "1px solid grey", width: "150%" }} type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={searchData}>Search</button>
                    <div class="dropdown">
                        <select onChange={getDropdown} style={{ height: "100%", border: "1px solid grey", color: "grey", borderRadius: "5px" }}>
                            <option selected disabled hidden>Search By</option>
                            <option value="song_name" id="song_name">Song Name</option>
                            <option value="singer" id="song_name">Singer Name</option>
                            <option value="album_name" id="song_name">Album/Movie Name</option>
                        </select>
                        {!searchDropdown && <div style={{ fontSize: "10px" }}>Please Select The Filter!</div>}
                    </div>
                </form>
            </div>
            <div className={styles.WidthFiveZeo}>

                <div style={{
                    //  border: "1px solid grey",
                    marginBottom: "30px",
                    borderRadius: "10px"
                }}>

                    {data?.results?.length != 0 && data.results !== undefined ?
                        data?.results?.map((item) => {
                            let song_name = item.song_name?.toLowerCase().split(" ").join("-")
                            let id = item._id
                            return (
                                <>
                                    <div className={styles["songDetails"]} onClick={() => { handleSong(item._id) }}>
                                        <div >
                                            <Link href={`songchords/${song_name}/${id}`} className={styles.textColor}>
                                                <div className={styles.songName}>
                                                    <label className='song'>Song Name:</label>
                                                    <div className={styles.textItem}>{item.song_name}</div>
                                                </div>
                                                <div className={styles.songName} >
                                                    <label className='song'>Singer Name:</label>
                                                    <div className={styles.textItem}>{item.singer}</div>
                                                </div>
                                                <div className={styles.songName}>
                                                    <label className='song'>Album Name :</label>
                                                    <div className={styles.textItem}>{item.album_name}</div>
                                                </div>
                                                {/* <div className='albumName' style={{ display: "flex", gap: "10px" }}>
                                                    <label className='song'>Album Name :</label>
                                                    <div className={styles.textItem}>{item.album_name}</div>
                                                </div> */}
                                            </Link>
                                        </div >
                                    </div >


                                </>)
                        }) : <><div style={{ textAlign: "center", padding: "30px" }}>Nothing to show here!</div></>}
                </div>
                <div>
                    <div>
                        {data?.results?.length != 0 && data.results !== undefined ?
                            <div style={{ display: "flex", gap: "5px", width: "100%", justifyContent: "center", marginBottom: "30px" }}>


                                <div style={{ border: "1px solid grey", padding: "8px", cursor: "pointer", borderRadius: "5px" }} onClick={previousPage} >
                                    Previous Page
                                </div >


                                {data.results.length != 0 && paginationData !== null && paginationData?.length !== 0 ?
                                    paginationData.map((pageNum, index) => {
                                        return (
                                            <>
                                                { }

                                                {index >= 5 ?
                                                    <div onClick={() => { fetchNewData(pageNum) }}>.</div> :
                                                    data.next - 1 === pageNum ?
                                                        <div style={{ border: "1px solid grey", padding: "8px", cursor: "pointer", backgroundColor: "#0b5ed7", color: "white" }} >{pageNum}</div> :
                                                        <div style={{ border: "1px solid grey", padding: "8px", cursor: "pointer" }} onClick={() => { fetchNewData(pageNum) }}>{pageNum}</div>
                                                }


                                                {paginationData.length > 6 ?
                                                    paginationData[paginationData.length - 1] === index ?
                                                        data.next - 1 === pageNum ?
                                                            <div style={{ border: "1px solid grey", padding: "8px", cursor: "pointer", backgroundColor: "#0b5ed7", color: "white" }} onClick={() => { fetchNewData(pageNum) }}>{pageNum}</div> :
                                                            <div style={{ border: "1px solid grey", padding: "8px", cursor: "pointer" }} onClick={() => { fetchNewData(pageNum) }}>{pageNum}</div> : <></> : <></>
                                                }

                                            </>
                                        )
                                    })

                                    : <>





                                    </>}
                                <div style={{ border: "1px solid grey", padding: "8px", cursor: "pointer" }} onClick={nextPage}>
                                    Next Page
                                </div >
                            </div > : <></>}
                    </div >
                </div >
            </div >



        </>



    )
}

export default Search