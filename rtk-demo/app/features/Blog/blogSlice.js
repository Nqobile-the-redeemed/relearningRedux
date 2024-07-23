const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    blogs: []
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        getBlogs: (state, action) => {
            state.blogs = action.payload;
        },
        // New reducer for posting a blog
        postBlog: (state, action) => {
            // Check if action.payload is an array. If not, wrap it in an array.
            const newBlogs = Array.isArray(action.payload) ? action.payload : [action.payload];
            // Ensure state.blogs is treated as an array even if it's undefined
            state.blogs = [...(state.blogs || []), ...newBlogs];
        }
    },
});

module.exports = blogSlice.reducer;
module.exports.blogActions = blogSlice.actions;