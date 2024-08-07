const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');

const initialState = {
    loading: false,
    users: [],
    error: ''
};

const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data);
});



const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
            state.error = '';
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

module.exports = usersSlice.reducer;
module.exports.fetchUsers = fetchUsers;