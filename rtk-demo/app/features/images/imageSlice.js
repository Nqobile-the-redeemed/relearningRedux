const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');


const initialState = {
    loading: false,
    images: [],
    error: ''
};

let clientID = 'JQ1oIAV-jX9sDeKyCaM6NodMwutPDaQSLTra5TY8NGQ';
let count = 6;
let endPoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}&count=${count}`;

const fetchImages = createAsyncThunk('images/fetchImages', () => {
    return axios
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

module.exports = imagesSlice.reducer;
module.exports.fetchImages = fetchImages;