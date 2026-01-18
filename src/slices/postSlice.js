import { createSlice } from "@reduxjs/toolkit";


const storedpost = JSON.parse(localStorage.getItem("post")) || [];

 const initialState ={
    post: storedpost,
    loading: false,
    error: null,
    success: false,
 }

 const postSlice = createSlice({
    name : "post",
    initialState,
    reducers:{
        createpost(state, action){
            state.loading = true;
            state.success = false;

        },
        createpostsuzz(state , action){
            state.loading = false;
            state.post.push(action.payload);
        state.success = true;
            localStorage.setItem("post",
                 JSON.stringify(state.post))
        },

        createpostfial(state , action){
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        },
        resetstatus(state){
            state.success = false;
            state.error = null; 
        }
    }
 })


 export const {createpost , resetstatus , createpostsuzz , createpostfial} = postSlice.actions;
    export default postSlice.reducer;