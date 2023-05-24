"use client"
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const STATEUES = {
    IDLE: "idle",
    EROOR: "error",
    LOADING: "loading"

}


const fetchDataSlice = createSlice({
    name: "allData",
    initialState: {
        data: [],
        status: STATEUES.IDLE
    },
    reducers: {
        setSongDetailsData(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
        findSongs(state, action) {
            state.data = action.payload
        }


    }
})




export const { setSongDetailsData, setStatus, findSongs } = fetchDataSlice.actions
export default fetchDataSlice.reducer



export function fetchThunkData(pageNo, pageLimit) {
    return async function fetchAllData(dispatch, getState) {
        dispatch(setStatus(STATEUES.LOADING))
        try {
            let response = await axios.get(`http://localhost:8080/chords/?page=${pageNo}&limit=${pageLimit}`)
            let data = await response.data
            dispatch(setSongDetailsData(data))
            dispatch(setStatus(STATEUES.IDLE))

        }
        catch (error) {
            console.log(error)
            dispatch(setStatus(STATEUES.EROOR))

        }
    }

}
export function fetchSearch(field, search) {
    return async function fetchAllData(dispatch, getState) {
        dispatch(setStatus(STATEUES.LOADING))
        try {
            let response = await axios.get(`http://localhost:8080/chords/?${field}=${search}`)
            let data = await response.data
            dispatch(setSongDetailsData(data))
            dispatch(setStatus(STATEUES.IDLE))

        }
        catch (error) {
            console.log(error)
            dispatch(setStatus(STATEUES.EROOR))

        }
    }

}






