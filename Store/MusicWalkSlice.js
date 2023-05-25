"use client"
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const STATEUES = {
    IDLE: "idle",
    EROOR: "error",
    LOADING: "loading"

}


const fetchMusicWalkData = createSlice({
    name: "musicWalk",
    initialState: {
        data: [],
        status: STATEUES.IDLE
    },
    reducers: {
        setMusicWalk(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },



    }
})




export const { setMusicWalk, setStatus } = fetchMusicWalkData.actions
export default fetchMusicWalkData.reducer



export function fetchMusicWalkDataThunk(pageNo, pageLimit) {
    return async function MusicWalkData(dispatch, getState) {
        dispatch(setStatus(STATEUES.LOADING))
        try {
            let response = await axios.get(`http://localhost:8080/music-walk-event-registraion`)
            let data = await response.data
            dispatch(setMusicWalk(data))
            dispatch(setStatus(STATEUES.IDLE))

        }
        catch (error) {
            console.log(error)
            dispatch(setStatus(STATEUES.EROOR))

        }
    }

}







