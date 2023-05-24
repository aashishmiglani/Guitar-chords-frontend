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
            // let response = await axios.get(`localhost:8080/${payload}`)
            let data = await response.data
            dispatch(setChordsSongs(data))
            dispatch(setStatus(STATEUES.IDLE))

        }
        catch (error) {
            console.log(error)
            dispatch(setStatus(STATEUES.EROOR))

        }
    }

}





