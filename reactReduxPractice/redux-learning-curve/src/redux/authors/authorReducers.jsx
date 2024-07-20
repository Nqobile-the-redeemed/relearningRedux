import { NEW_AUTHORS } from './authorTypes';

const initialState = {
    authors: []
}

const authorReducer = (state = initialState, action) => {
    switch(action.type) {
        case NEW_AUTHORS:
            return {
                ...state,
                authors: [...state.authors, action.payload]
            }
        default: return state
    }
}

export default authorReducer