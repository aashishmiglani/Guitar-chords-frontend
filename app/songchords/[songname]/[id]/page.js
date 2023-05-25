"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { usePathname } from 'next/navigation'
import { fetchThunkChordsSongsData } from "@/Store/singleDataSlice"
import songCss from "./page.module.css"

const page = () => {
  const dispatch = useDispatch()

  const pathname = usePathname();

  const { data, status } = useSelector((state) => state.singleSongChordData)
  // const data = useSelector((state) => state.singleSongChordData)



  let params = pathname.split("/")
  let chordId = params[params.length - 1]

  useEffect(() => {
    dispatch(fetchThunkChordsSongsData(chordId))
  }, [])


  let path
  if (data[0]?.pdf_file)
    path = "http://127.0.0.1:8887/Guitar-chords-backend" + data[0]?.pdf_file


  return (
    <>
      <div className={songCss.songName}>
        <div style={{ fontSize: "20px", fontWeight: "bolder" }} >Guitar Chords of </div>
        <div style={{ fontSize: "20px", fontWeight: "bolder" }}>{data[0]?.chord_id?.song_name}</div>

      </div>
      <div className={songCss.flexParent}>

        <div className={songCss.frame}>
          <iframe src={path} height={"500px"} />
        </div>

        <div className={songCss.contenet}>

          {data.map((item) => {
            return (<>

              <div className={songCss.songSummary}>


                < div className={songCss.conetntStyle} >
                  <div style={{ fontSize: "12px" }}>Singer Name : </div>
                  <div>{item.chord_id.singer} </div>
                </div>

                < div className={songCss.conetntStyle} >
                  <div style={{ fontSize: "12px" }}>Song Name : </div>
                  <div>{item.chord_id.song_name} </div>
                </div>


                < div className={songCss.conetntStyle} >
                  <div style={{ fontSize: "12px" }}>Album Name : </div>
                  <div>{item.chord_id.album_name} </div>
                </div>

                < div className={songCss.conetntStyle} >
                  <div style={{ fontSize: "12px" }}>Compostion : </div>
                  <div>{item.chord_id.compostion} </div>
                </div>

                < div className={songCss.conetntStyle} >
                  <div style={{ fontSize: "12px" }}>Lyricis By: </div>
                  <div>{item.chord_id.lyricist} </div>
                </div>

                < div className={songCss.conetntStyle} >
                  <div style={{ fontSize: "12px" }}>Produced By: </div>
                  <div>{item.chord_id.produced_by} </div>
                </div>


                < div className={songCss.conetntStyle} >
                  <div style={{ fontSize: "12px" }}>Music Director: </div>
                  <div>{item.chord_id.music_director} </div>
                </div>

                < div className={songCss.conetntStyle} >
                  <div style={{ fontSize: "12px" }}>Cover Song: </div>
                  <div>{item.chord_id.cover} </div>
                </div>

                {item.chord_id.cover &&
                  < div className={songCss.conetntStyle} >
                    <div style={{ fontSize: "12px" }}>Original Singer: </div>
                    <div>{item.chord_id.original_singer} </div>
                  </div>}



              </div>



              <div className={songCss.songDeatil}>
                < div className={songCss.conetntStyle} >
                  <div style={{ fontSize: "12px" }}>Chord Type : </div>
                  <div>{item.chord_type} </div>
                </div>

                < div className={songCss.conetntStyle} >
                  <div style={{ fontSize: "12px" }}>Family chords : </div>
                  <div>{item.family_chords} </div>
                </div>



                < div className={songCss.conetntStyle} >
                  <div style={{ fontSize: "12px" }}>Strumming Pattern : </div>
                  <div>{item.strumming_pattern} </div>
                </div>



                < div className={songCss.conetntStyle} >
                  <div style={{ fontSize: "12px" }}>Strumming Type : </div>
                  <div>{item.strumming_type} </div>
                </div>
              </div>

            </>)

          })
          }

        </div>
      </div >

    </>
  )
}

export default page