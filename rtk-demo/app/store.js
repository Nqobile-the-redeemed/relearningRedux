const configureStore = require('@reduxjs/toolkit').configureStore;
const reduxLogger = require('redux-logger');
const blogReducer = require('./features/Blog/blogSlice');
const authorsReducer = require('./features/Authors/authorsSlice');
const userReducer = require('./features/users/usersSlice');
const imageReducer = require('./features/images/imageSlice');

const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        blog: blogReducer,
        authors: authorsReducer,
        user: userReducer,
        images: imageReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

module.exports = store;