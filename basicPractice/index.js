// the string constant that indicates the type of action to be performed
const BLOG_POSTS_RETREIVED = "BLOG_POSTS_RETREIVED";


// define the action which is an object with a type and a payload
{
    type: BLOG_POSTS_RETREIVED;
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
function blogPostsRetreived(posts) {
    return {
        type: BLOG_POSTS_RETREIVED,
        payload: posts
    }
}

//In Redux, a reducer is a pure function that takes the current state and an action as arguments and returns a new state. Reducers specify how the application's state changes in response to actions sent to the store. The idea of reducers comes from the concept of reducing a collection of values down to a single value.
