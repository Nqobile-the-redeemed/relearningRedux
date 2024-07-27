import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import blogReducer from './features/blogs/blogsSlice';
import imageReducer from './features/images/imagesSlice';

const store = configureStore({
    reducer: {
        blog: blogReducer,
        image: imageReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;