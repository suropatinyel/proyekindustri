import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducer/AlldataReducer";

const store = configureStore({
    reducer:{
        alldata: movieReducer
    }
})

export default store;