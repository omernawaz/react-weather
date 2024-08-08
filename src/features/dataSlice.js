import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    data: null,
    error: '',
}

export const fetchData = createAsyncThunk('data/fetchData', (fetchUrl) => {
    return axios.get(fetchUrl)
     .then(response => response.data);
})

export const chartsSlice = createSlice({
    name: 'data',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchData.pending, (state)=>{
            state.isLoading = false;
        });

        builder.addCase(fetchData.fulfilled, (state,action)=>{
            if(action.payload instanceof Object) {
                state.isLoading = false;
                state.data = action.payload;
            }
        });

        builder.addCase(fetchData.rejected, (state,action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
    
})


export default chartsSlice.reducer;