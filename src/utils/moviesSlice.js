import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',

    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            
            state.nowPlayingMovies = action.payload;
            // console.log('state-Payload:', state.nowPlayingMovies); 
        },
    }
});

export const {addNowPlayingMovies} = moviesSlice.actions
export default moviesSlice.reducer