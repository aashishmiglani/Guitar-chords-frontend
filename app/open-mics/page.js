"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux'
import { fetchOpenMicDataThunk } from "../../Store/openMicSlice"
import Modal from "../../Modal/Modal.js"
import pages from "./page.module.css"
import Link from 'next/link';
import axios from 'axios';


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
  const { data, status } = useSelector((state) => state.openMicRegisterion)
  useEffect(() => {
    dispatch(fetchOpenMicDataThunk())
  }, [])



  console.log("JDHJGID", data)


  const clickMe = () => {
    setModal(!modal)
  }
  const submitCloseModal = () => {

    axios.post("http://localhost:8080/open-mic-event-registraion", eventRegister).then((res) => {

      alert("Registered Sucesfuly")
      dispatch(fetchOpenMicDataThunk())
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



  return (
    <>

      <div className={modal ? pages.blur : pages.notBlur} >
        <div className={pages.imageText}>
          <Image src="/Recording-pana.png"
            alt="jhb"
            className={pages.borderWidth}
            width={500}
            height={500}
            priority />
          <div className={pages.textButton}>
            <div className={pages.text}>
              All Open Mic Events
            </div>
            <button onClick={clickMe} className={pages.buttonRegister}>Register an Open Mic </button>

          </div>
        </div>



      </div>

      <div>

        {modal && <Modal >
          <div style={{ textAlign: "center", fontSize: "30px", marginBottom: "35px", fontWeight: "bold", borderBottom: "2px solid white", paddingBottom: "15px" }}>Event Register</div>
          <div className={pages.fieldsFlex}>
            <label>Event Name</label>
            <input onChange={handleInput} name="event_name" className={pages.Input} type='text' placeholder='Event Name' />
          </div>

          <div className={pages.fieldsFlex}>
            <label>Organised By</label>
            <input onChange={handleInput} name="organised_by" className={pages.Input} type='text' placeholder='Organised By' />
          </div>


          <div className={pages.fieldsFlex}>
            <label>Activities </label>
            <input onChange={handleInput} name="activities" className={pages.Input} type='text' placeholder='Activities' />
          </div>


          <div className={pages.fieldsFlex}>
            <label>Event Location</label>
            <input onChange={handleInput} name="event_location" className={pages.Input} type='text' placeholder='Event Location' />
          </div>


          <div className={pages.fieldsFlex}>
            <label>Organised on</label>
            <input onChange={handleInput} name="organised_on" className={pages.Input} type='date' placeholder='Event Location' />
          </div>



          <div className={pages.fieldsFlex}>
            <label>Timmings From</label>
            <input onChange={handleInput} name="start_time" className={pages.Input} type='time' placeholder='Event Location' />
          </div>



          <div className={pages.fieldsFlex}>
            <label>Timmings to</label>
            <input onChange={handleInput} name="end_time" className={pages.Input} type='time' placeholder='Event Location' />
          </div>


          <div className={pages.fieldsFlex}>
            <label>State</label>
            <input onChange={handleInput} o name="state" className={pages.Input} type='text' placeholder='State' />
          </div>


          <div className={pages.fieldsFlex}>
            <label>City</label>
            <input onChange={handleInput} name="city" className={pages.Input} type='text' placeholder='City' />
          </div>


          <div className={pages.buttonFlex}>

            <button className={pages.button} onClick={submitCloseModal}>Submit</button>
            <button className={pages.button} onClick={closeModal}>Close</button>
          </div>


        </Modal>}


        <div style={{ fontSize: "30px", paddingTop: "30px", fontWeight: "bolder", textAlign: "center", marginTop: "50px", borderTop: "1px solid grey" }}>All Upcoming Events</div>
        <div className={pages.mapGrid}>
          {data.map((item) => {
            let eventId = item._id
            return (<>
              <Link href={`open-mics/${eventId}`} style={{ textDecoration: "none" }}>

                <div className={pages.songDetails}>

                  {/* <div className={styles.songName}>
                <label className='song'>Song Name:</label>
                <div className={styles.textItem}>{item.song_name}</div>
              </div> */}

                  <div className={pages.songName}>
                    <label >Event Name:</label>
                    <div className={pages.textSize}>{item.event_name}</div>
                  </div>

                  <div className={pages.songName}>
                    <label>Event Location:</label>
                    <div className={pages.textSize}>{item.event_location}</div>
                  </div>


                  <div className={pages.songName}>
                    <label>Organised by:</label>
                    <div className={pages.textSize}>{item.organised_by}</div>
                  </div>


                  <div className={pages.songName}>
                    <label>Organised on:</label>
                    <div className={pages.textSize}>{item.organised_on}</div>
                  </div>


                  <div className={pages.songName}>
                    <label>Event Start:</label>
                    <div className={pages.textSize}>{item.start_time}</div>
                  </div>


                  <div className={pages.songName}>
                    <label>Event End:</label>
                    <div className={pages.textSize} >{item.end_time}</div>
                  </div>


                  <div className={pages.songName} >
                    <label>State:</label>
                    <div className={pages.textSize}>{item.state}</div>
                  </div>


                  <div className={pages.songName}>
                    <label>City:</label>
                    <div className={pages.textSize}>{item.city}</div>
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