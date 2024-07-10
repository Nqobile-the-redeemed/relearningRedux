const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

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

const superServices = `
In a world of endless choice,
Where voices shout and billows voice,
A hero comes to save the day,
To guide you on your merry way.

With powers vast and wisdom deep,
They’ll help you climb the highest peak.
From simple tasks to grand affairs,
They’ll lend a hand, show that they care.

They’ll fix your home, they’ll mend your heart,
They’ll teach you how to bake a tart.
They’ll find the words you need to say,
To make a friend, to light your way.

With every task, they’ll do their best,
To help you rise above the rest.
They’ll be your guide, your shining light,
To help you through the darkest night.

So when you’re lost and all alone,
Just pick up the phone, give them a call.
They’ll be there in a flash, you’ll see,
To help you be the best you can be.
`;

const omegaverse = `
In a world of endless night,
Where shadows lurk and demons fight,
A hero rises from the dark,
To light the flame, to make their mark.

With eyes of fire and heart of ice,
They’ll pay the ultimate price.
To save the world, to right the wrong,
To sing the hero’s final song.

They’ll face the darkness, stand their ground,
With courage bold, with strength unbound.
They’ll fight the monsters, face the fear,
To make the world a better sphere.

With every battle, every fight,
They’ll show the world their shining light.
They’ll be the hero, brave and true,
To make the world a better view.

So when the shadows start to creep,
And nightmares haunt you in your sleep,
Just close your eyes, and say the verse,
To summon forth the hero’s curse.
`;


// the string constant that indicates the type of action to be performed
const BLOG_POSTS_UPLOADED = "BLOG_POSTS_UPLOADED";
const BLOG_POST_DELETED = "BLOG_POST_DELETED"
const BLOG_POST_UPDATED = "BLOG_POST_UPDATED"

const SERVICE_ADDED = "SERVICE_ADDED";
const SERVICE_REMOVED = "SERVICE_REMOVED";
const SERVICE_UPDATED = "SERVICE_UPDATED";


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

function serviceAdded(service){
    return {
        type: SERVICE_ADDED,
        payload: service
    }
}

function serviceRemoved(service){
    return {
        type: SERVICE_REMOVED,
        payload: service
    }
}

function serviceUpdated(serviceName, serviceDetails){
    return {
        type: SERVICE_UPDATED,
        title: serviceName,
        body: serviceDetails
    }
}

//state

const initialServicesState = {
    services: []
}

const initialPostsState = {
    posts: []
}

//In Redux, a reducer is a pure function that takes the current state and an action as arguments and returns a new state. Reducers specify how the application's state changes in response to actions sent to the store. The idea of reducers comes from the concept of reducing a collection of values down to a single value.
const servicesReducer = (state = initialServicesState, action) => {
    switch(action.type) {
        case SERVICE_ADDED: {
            return {
                ...state,
                services: [...state.services, ...action.payload]
            }
        };
        case SERVICE_REMOVED: {
            return {
                ...state,
                services: state.services.filter(service => service.name !== action.payload)
            }
        };
        case SERVICE_UPDATED: {
            return {
                ...state,
                services: state.services.map(service => {
                    if(service.name === action.title){
                        return {
                            ...service,
                            details: action.body
                        }
                    }
                    return service;
                })
            }
        };
        default: return state;
    }
}

//In Redux, a reducer is a pure function that takes the current state and an action as arguments and returns a new state. Reducers specify how the application's state changes in response to actions sent to the store. The idea of reducers comes from the concept of reducing a collection of values down to a single value.
const postsReducer = (state = initialPostsState, action) => {
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

//combine reducers
const rootReducer = combineReducers({
    posts: postsReducer,
    services: servicesReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

//subscribe to the store
console.log('initial state',store.getState());
const unsubscribe = store.subscribe(() => {});

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

// store.dispatch(blogPostDeleted("My third blog post"));

// store.dispatch(blogPostUpdated("My first blog post", anAdventureOffALifeTime ));

const actionCreators = bindActionCreators({blogPostsUploaded, blogPostDeleted, blogPostUpdated, serviceAdded, serviceRemoved, serviceUpdated}, store.dispatch);

actionCreators.blogPostsUploaded([
    {
        title: "My seventh blog post",
        content: "This is my seventh blog post"
    },
    {
        title: "My eighth blog post",
        content: "This is my eighth blog post"
    }
]);

actionCreators.blogPostDeleted("My sixth blog post");

actionCreators.blogPostUpdated("My second blog post", anAdventureOffALifeTime);

actionCreators.serviceAdded([
    {
        name: "My first service",
        details: "This is my first service"
    },
    {
        name: "My second service",
        details: "This is my second service"
    },
    {
        name: "My third service",
        details: "This is my third service"
    },
    {
        name: "My fourth service",
        details: "This is my fourth service"
    },
    {
        name: "My fifth service",
        details: "This is my fifth service"
    },
    {
        name: "My sixth service",
        details: "This is my sixth service"
    },
    {
        name: "My seventh service",
        details: "This is my seventh service"
    }
]);

actionCreators.serviceRemoved("My third service");

actionCreators.serviceUpdated("My first service", omegaverse);

actionCreators.serviceUpdated("My fifth service", superServices);



unsubscribe();