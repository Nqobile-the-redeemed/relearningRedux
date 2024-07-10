import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
//const { configureStore } = require('@reduxjs/toolkit');
// const createStore = redux.createStore
// const applyMiddleware = redux.applyMiddleware

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const FETCH_PORTFOLIO_REQUEST = 'FETCH_PORTFOLIO_REQUEST'
const FETCH_PORTFOLIO_SUCCESS = 'FETCH_PORTFOLIO_SUCCESS'
const FETCH_PORTFOLIO_FAILURE = 'FETCH_PORTFOLIO_FAILURE'

const fetchPortfolioRequest = () => {
    return {
        type: FETCH_PORTFOLIO_REQUEST
    }
}

const fetchPortfolioSuccess = data => {
    return {
        type: FETCH_PORTFOLIO_SUCCESS,
        payload: data
    }
}

const fetchPortfolioFailure = error => {
    return {
        type: FETCH_PORTFOLIO_FAILURE,
        payload: error
    }
}


const fetchPortfolio = () => {
    return function(dispatch) {
        dispatch(fetchPortfolioRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const data = response.data
                dispatch(fetchPortfolioSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchPortfolioFailure(errorMsg))
            })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PORTFOLIO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PORTFOLIO_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_PORTFOLIO_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
    }
}


const store = createStore(reducer, applyMiddleware(thunk));


// const store = configureStore({
//     reducer: reducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
//   });

store.subscribe(() => { console.log(store.getState()) })

store.dispatch(fetchPortfolio())