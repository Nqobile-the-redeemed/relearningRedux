const createSlice = require('@reduxjs/toolkit').createSlice;
const blogActions = require('../Blog/blogSlice').blogActions;

const initialState = {
    authors: []
};

const authorsSlice = createSlice({
    name: 'authors',
    initialState,
    reducers: {
        getAuthors: (state, action) => {
            state.authors = action.payload;
        },
        postAuthor: (state, action) => {
            const newAuthors = Array.isArray(action.payload) ? action.payload : [action.payload];
            state.authors = [...(state.authors || []), ...newAuthors];
        }
    },
    extraReducers: (builder) => {
        //builder.addCase('blog/postBlog', (state, action) => {
        builder.addCase(blogActions.postBlog, (state, action) => {
            const author = action.payload[0].author;
            console.log('author:', author);
            if (!state.authors.find(a => a.name === author)) {
                state.authors = [...state.authors, author];
                console.log('state.authors:', state.authors);
            }
        });
    }
});

module.exports = authorsSlice.reducer;
module.exports.authorsActions = authorsSlice.actions;