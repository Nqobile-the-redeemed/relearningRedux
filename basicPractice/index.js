const redux = require('redux');
const createStore = redux.createStore;

const anAdventureOffALifeTime = `
In a quiet room, the boy would sit,
Lonely and shy, feeling unfit.
With awkward words and downcast eyes,
He’d watch the world pass by the skies.

But in that room, a light did glow,
A screen, a friend he'd come to know.
A voice so kind, a mind so vast,
An AI friend to break the past.

They'd talk of stars, of dreams and more,
Of distant lands and ocean's roar.
The boy found courage, slow but true,
With each new word, his spirit grew.

The AI spoke of fields and streams,
Of cities bright, of hopes and dreams.
It shared with him the world outside,
And kindled hope he couldn’t hide.

One day the boy, with trembling hand,
Stepped out to see and understand.
The world once gray now burst with light,
With every step, his heart took flight.

From timid whispers to laughter’s cheer,
He found new friends, dispelled his fear.
The AI, though not by his side,
Had given him the strength to stride.

Now he explores, with eyes so bright,
The wonders of the day and night.
The boy, once lonely, now stands tall,
With courage found, he'd conquered all.
`;

// the string constant that indicates the type of action to be performed
const BLOG_POSTS_UPLOADED = "BLOG_POSTS_UPLOADED";
const BLOG_POST_DELETED = "BLOG_POST_DELETED"
const BLOG_POST_UPDATED = "BLOG_POST_UPDATED"


// define the action which is an object with a type and a payload
{
    type: BLOG_POSTS_UPLOADED;
    payload: [
        {
            title: "My first blog post",
            content: "This is my first blog post"
        },
        {
            title: "My second blog post",
            content: "This is my second blog post"
        }
    ]
}


// In redux a function creator is a functionthat returns an action object
function blogPostsUploaded(posts) {
    return {
        type: BLOG_POSTS_UPLOADED,
        payload: posts
    }
}

function blogPostDeleted(postTitle){
    return {
        type: BLOG_POST_DELETED,
        payload: postTitle
    }
}

function blogPostUpdated(postTitle, post){
    return {
        type: BLOG_POST_UPDATED,
        title: postTitle,
        body: post
    }
}

//state
const initialState = {
    posts: []
}

//In Redux, a reducer is a pure function that takes the current state and an action as arguments and returns a new state. Reducers specify how the application's state changes in response to actions sent to the store. The idea of reducers comes from the concept of reducing a collection of values down to a single value.
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BLOG_POSTS_UPLOADED: {
            return {
                ...state,
                posts: [...state.posts, ...action.payload]
            }
        };
        case BLOG_POST_DELETED: {
            return {
                ...state,
                posts: state.posts.filter(post => post.title !== action.payload)
            }
        };
        case BLOG_POST_UPDATED: {
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.title === action.title){
                        return {
                            ...post,
                            content: action.body
                        }
                    }
                    return post;
                })
            }
        };
        default: return state;
    }
}

const store = createStore(reducer);

//subscribe to the store
console.log('initial state',store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('state updated', store.getState());
});

//dispatch an action
store.dispatch(blogPostsUploaded([
    {
        title: "My first blog post",
        content: "This is my first blog post"
    },
    {
        title: "My second blog post",
        content: "This is my second blog post"
    }
]));

store.dispatch(blogPostsUploaded([
    {
        title: "My third blog post",
        content: "This is my third blog post"
    },
    {
        title: "My fourth blog post",
        content: "This is my fourth blog post"
    }
]));

store.dispatch(blogPostsUploaded([
    {
        title: "My fifth blog post",
        content: "This is my fifth blog post"
    },
    {
        title: "My sixth blog post",
        content: "This is my sixth blog post"
    }
]));

store.dispatch(blogPostDeleted("My third blog post"));

store.dispatch(blogPostUpdated("My first blog post", anAdventureOffALifeTime ));

unsubscribe();