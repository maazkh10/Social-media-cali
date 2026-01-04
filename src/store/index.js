import { configureStore } from "@reduxjs/toolkit";
import autSlice from '../slices/authSlice'

const store = configureStore({

    reducer:{
        auth: autSlice,
    }
})


export default store