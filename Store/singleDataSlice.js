"use client"
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const STATEUES = {
    IDLE: "idle",
    EROOR: "error",
    LOADING: "loading"

}


const fetchSingleDataSlice = createSlice({
    name: "singleData",
    initialState: {
        data: [],
        status: STATEUES.IDLE
    },
    reducers: {
        setSingleHarryPotterData(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }


    }
})




export const { setSingleHarryPotterData, setStatus } = fetchSingleDataSlice.actions
export default fetchSingleDataSlice.reducer



export function fetchThunkSingleData(payload) {
    return async function fetchAllData(dispatch, getState) {
        dispatch(setStatus(STATEUES.LOADING))
        try {
            let response = await axios.get(`https://legacy--api.herokuapp.com/api/v1/characters/${payload}`)
            let data = await response.data
            dispatch(setSingleHarryPotterData(data))
            dispatch(setStatus(STATEUES.IDLE))

        }
        catch (error) {
            console.log(error)
            dispatch(setStatus(STATEUES.EROOR))

        }
    }

}





