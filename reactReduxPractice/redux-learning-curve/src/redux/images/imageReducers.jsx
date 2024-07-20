import {NEW_IMAGES} from './imageTypes';

const initialState = {
    images: [],
    isLoading: true,
    error: null
};

const imageReducers = (state = initialState, action) => {
    switch(action.type) {
        case NEW_IMAGES:
            return {
                ...state,
                images: action.payload,
                isLoading: false
            };
        // Add cases for loading and error states if needed
        default: return state;
    }
};
export default imageReducers