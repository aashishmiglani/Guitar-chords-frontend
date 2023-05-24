"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { fetchThunkChordsSongsData } from "@/Store/singleDataSlice"

const page = () => {
  const dispatch = useDispatch

  const router = useRouter();
  const { query } = router;


  console.log("JLHYYGFVUL", router)

  useEffect(() => {
    dispatch(fetchThunkChordsSongsData())
  }, [])


  return (
    <>



    </>
  )
}

export default page