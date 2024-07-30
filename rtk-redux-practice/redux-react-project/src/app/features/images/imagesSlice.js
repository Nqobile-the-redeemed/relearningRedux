import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Axios } from 'axios';

const initialState = {
    loading: false,
    images: [],
    error: ''
};

let clientID = 'JQ1oIAV-jX9sDeKyCaM6NodMwutPDaQSLTra5TY8NGQ';
let count = 6;
let endPoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}&count=${count}`;

export const fetchImages = createAsyncThunk('images/fetchImages', () => {
    return Axios
        .get(endPoint)
        .then(response => response.data);
});

const imagesSlice = createSlice({
    name: 'images',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchImages.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            state.images = action.payload;
            state.loading = false;
            state.error = '';
        });
        builder.addCase(fetchImages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default imagesSlice.reducer;