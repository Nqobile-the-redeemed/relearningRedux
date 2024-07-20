import { NEW_BLOG } from "./blogTypes"

const initialState = {
    blogs: [
        {
          title: '',
          content: '',
          author: ''
        }
      ],
}

const blogReducer = ( state = initialState, action) => {
    switch(action.type) {
        case NEW_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload]
            }
        default: return state
    }
}

export default blogReducer