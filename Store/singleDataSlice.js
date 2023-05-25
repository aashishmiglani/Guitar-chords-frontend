"use client"
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const STATEUES = {
    IDLE: "idle",
    EROOR: "error",
    LOADING: "loading"

}


const fetchChordsSingleData = createSlice({
    name: "singleSongChordData",
    initialState: {
        data: [],
        status: STATEUES.IDLE
    },
    reducers: {
        setChordsSongs(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }


    }
})




export const { setChordsSongs, setStatus } = fetchChordsSingleData.actions
export default fetchChordsSingleData.reducer



export function fetchThunkChordsSongsData(payload) {
    return async function fetchSongChords(dispatch, getState) {
        dispatch(setStatus(STATEUES.LOADING))
        try {
            let response = await axios.get(`http://localhost:8080/chords-files-data/`)
            let data = await response.data
            let filterId = data.filter((item) => {
                return item.chord_id._id === payload
            })
            dispatch(setChordsSongs(filterId))
            dispatch(setStatus(STATEUES.IDLE))

        }
        catch (error) {
            console.log(error)
            dispatch(setStatus(STATEUES.EROOR))

        }
    }

}





