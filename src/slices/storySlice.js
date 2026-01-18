import { createSlice } from "@reduxjs/toolkit";

const storedstory = 
JSON.parse(localStorage.getItem("story"))  || [];

const initialState ={
    story : storedstory,
    loading : false,
    error : null,
    success : false,
}

const storySclice = createSlice({
    name : "story",
    initialState , 
    reducers:{
        createstory(state, action){
            state.loading = true;
            state.success = false;
            state.error = null;
        },
        createstorysuzz(state , action ){
            state.loading = false;
            state.success = true;
            state.story.push(action.payload);
            localStorage.setItem("story" ,
                JSON.stringify(state.story)
            )
        },
        creteStoryfail(state , action){
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        },
        resetstorystatus(state){
            state.success = false;
            state.error = null;
        }
    }
})


export const { createstory, resetstorystatus , createstorysuzz ,
     creteStoryfail } = storySclice.actions;
export default storySclice.reducer;;