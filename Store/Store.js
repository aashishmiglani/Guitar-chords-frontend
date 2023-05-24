"use client"
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "./dataSlice.js"
import singleDataReducer from "./singleDataSlice.js"
import openMicReducer from "./openMicSlice.js"




export const store = configureStore({
    reducer: {
        allData: dataReducer,
        singleData: singleDataReducer,
        openMicRegisterion: openMicReducer




    },
})
const AppStore = store.getState();
const AppDispatch = store.getState;
export { AppStore, AppDispatch }