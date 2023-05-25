"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import walkStyles from "./page.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { fetchMusicWalkDataThunk } from "../../Store/MusicWalkSlice"
import Modal from '@/Modal/Modal'
import Link from 'next/link'
import axios from 'axios'

const page = () => {


    const [modal, setModal] = useState(false)
    const [eventRegister, setEventRegister] = useState({
        "event_name": "",
        "organised_by": "",
        "activities": "",
        "event_location": "",
        "city": "",
        "state": ""
    })



    const dispatch = useDispatch()
    const { data, status } = useSelector((state) => state.musicWalk)
    useEffect(() => {
        dispatch(fetchMusicWalkDataThunk())
    }, [])





    const clickMe = () => {
        setModal(!modal)
    }
    const submitCloseModal = () => {

        axios.post("http://localhost:8080/music-walk-event-registraion", eventRegister).then((res) => {

            alert("Registered Sucesfuly")
            dispatch(fetchMusicWalkDataThunk())
        })
        setModal(!modal)

    }
    const closeModal = () => {
        setModal(!modal)

    }
    const handleInput = (e) => {
        setEventRegister({
            ...eventRegister, [e.target.name]: e.target.value
        })
    }

    console.log("JDVLD", data)


    return (
        <>

            <div className={modal ? walkStyles.blur : walkStyles.notBlur} >


                <div className={walkStyles.textImageFlex} >
                    <Image src="/Walking around-amico.svg"
                        alt="jhb"
                        className={walkStyles.borderWidth}
                        width={500}
                        height={500}
                        priority />

                    <div className={walkStyles.textButton}>
                        <div className={walkStyles.text}>
                            All Music Walks
                        </div>
                        <button onClick={clickMe} className={walkStyles.buttonRegister}>Register Music Walk </button>

                    </div>

                </div>


            </div>

            <div>

                {modal && <Modal >
                    <div style={{ textAlign: "center", fontSize: "30px", marginBottom: "35px", fontWeight: "bold", borderBottom: "2px solid white", paddingBottom: "15px" }}>Event Register</div>
                    <div className={walkStyles.fieldsFlex}>
                        <label>Event Name</label>
                        <input onChange={handleInput} name="event_name" className={walkStyles.Input} type='text' placeholder='Event Name' />
                    </div>

                    <div className={walkStyles.fieldsFlex}>
                        <label>Organised By</label>
                        <input onChange={handleInput} name="organised_by" className={walkStyles.Input} type='text' placeholder='Organised By' />
                    </div>

                    <div className={walkStyles.fieldsFlex}>
                        <label>Event Location</label>
                        <input onChange={handleInput} name="event_location" className={walkStyles.Input} type='text' placeholder='Event Location' />
                    </div>


                    <div className={walkStyles.fieldsFlex}>
                        <label>Organised on</label>
                        <input onChange={handleInput} name="organised_on" className={walkStyles.Input} type='date' placeholder='Event Location' />
                    </div>



                    <div className={walkStyles.fieldsFlex}>
                        <label>Timmings From</label>
                        <input onChange={handleInput} name="start_time" className={walkStyles.Input} type='time' placeholder='Event Location' />
                    </div>



                    <div className={walkStyles.fieldsFlex}>
                        <label>Timmings to</label>
                        <input onChange={handleInput} name="end_time" className={walkStyles.Input} type='time' placeholder='Event Location' />
                    </div>


                    <div className={walkStyles.fieldsFlex}>
                        <label>State</label>
                        <input onChange={handleInput} o name="state" className={walkStyles.Input} type='text' placeholder='State' />
                    </div>


                    <div className={walkStyles.fieldsFlex}>
                        <label>City</label>
                        <input onChange={handleInput} name="city" className={walkStyles.Input} type='text' placeholder='City' />
                    </div>


                    <div className={walkStyles.buttonFlex}>

                        <button className={walkStyles.button} onClick={submitCloseModal}>Submit</button>
                        <button className={walkStyles.button} onClick={closeModal}>Close</button>
                    </div>


                </Modal>}


                <div style={{ fontSize: "30px", paddingTop: "30px", fontWeight: "bolder", textAlign: "center", marginTop: "50px", borderTop: "1px solid grey" }}>All Upcoming Events</div>
                <div className={walkStyles.mapGrid}>
                    {data.map((item) => {
                        console.log("JHVDHD", item)
                        let eventId = item._id
                        return (<>
                            <Link href={`open-mics/${eventId}`} style={{ textDecoration: "none" }}>

                                <div className={walkStyles.songDetails}>



                                    <div className={walkStyles.songName}>
                                        <label >Event Name:</label>
                                        <div className={walkStyles.textSize}>{item.event_name}</div>
                                    </div>

                                    <div className={walkStyles.songName}>
                                        <label>Event Location:</label>
                                        <div className={walkStyles.textSize}>{item.event_location}</div>
                                    </div>


                                    <div className={walkStyles.songName}>
                                        <label>Organised by:</label>
                                        <div className={walkStyles.textSize}>{item.organised_by}</div>
                                    </div>


                                    <div className={walkStyles.songName}>
                                        <label>Organised on:</label>
                                        <div className={walkStyles.textSize}>{item.organised_on}</div>
                                    </div>


                                    <div className={walkStyles.songName}>
                                        <label>Event Start:</label>
                                        <div className={walkStyles.textSize}>{item.start_time}</div>
                                    </div>


                                    <div className={walkStyles.songName}>
                                        <label>Event End:</label>
                                        <div className={walkStyles.textSize} >{item.end_time}</div>
                                    </div>


                                    <div className={walkStyles.songName} >
                                        <label>State:</label>
                                        <div className={walkStyles.textSize}>{item.state}</div>
                                    </div>


                                    <div className={walkStyles.songName}>
                                        <label>City:</label>
                                        <div className={walkStyles.textSize}>{item.city}</div>
                                    </div>





                                </div >
                            </Link>

                        </>)
                    })}
                </div >






            </div >

        </>
    )





}

export default page