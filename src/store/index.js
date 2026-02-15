import { configureStore } from "@reduxjs/toolkit";
import autSlice from '../slices/authSlice'
import postSlice from "../slices/postSlice";
import storySclice from "../slices/storySlice";
const store = configureStore({

    reducer:{
        auth: autSlice,
        post: postSlice,
        story : storySclice
    }
})


export default store