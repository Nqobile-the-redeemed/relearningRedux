import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    blogs: []
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        getBlogs: (state) => {
            state.blogs;
        },
        // New reducer for posting a blog
        postBlog: (state, action) => {
            // Check if action.payload is an array. If not, wrap it in an array.
            const newBlogs = Array.isArray(action.payload) ? action.payload : [action.payload];
            // Ensure state.blogs is treated as an array even if it's undefined
            state.blogs = [...(state.blogs || []), ...newBlogs];
            console.log(state.blogs);
        }
    },
});

export default blogSlice.reducer;
export const {getBlogs, postBlog} = blogSlice.actions;