"use client"
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const STATEUES = {
    IDLE: "idle",
    EROOR: "error",
    LOADING: "loading"

}


const fetchOpenMicData = createSlice({
    name: "openMicRegisterion",
    initialState: {
        data: [],
        status: STATEUES.IDLE
    },
    reducers: {
        setOpenMicRegistration(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },



    }
})




export const { setOpenMicRegistration, setStatus } = fetchOpenMicData.actions
export default fetchOpenMicData.reducer



export function fetchOpenMicDataThunk(pageNo, pageLimit) {
    return async function fetchAllOpenMicData(dispatch, getState) {
        dispatch(setStatus(STATEUES.LOADING))
        try {
            let response = await axios.get(`http://localhost:8080/open-mic-event-registraion`)
            let data = await response.data
            dispatch(setOpenMicRegistration(data))
            dispatch(setStatus(STATEUES.IDLE))

        }
        catch (error) {
            console.log(error)
            dispatch(setStatus(STATEUES.EROOR))

        }
    }

}







