import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import blogReducer from './features/blogs/blogsSlice';

const store = configureStore({
    reducer: {
        blog: blogReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;