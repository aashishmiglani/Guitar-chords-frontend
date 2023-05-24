"use client"
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "./dataSlice.js"
import singleDataReducer from "./singleDataSlice.js"




export const store = configureStore({
    reducer: {
        allData: dataReducer,
        singleData: singleDataReducer,




    },
})
const AppStore = store.getState();
const AppDispatch = store.getState;
export { AppStore, AppDispatch }