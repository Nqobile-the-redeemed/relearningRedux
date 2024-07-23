const store = require('./app/store');
const blogActions = require('./app/features/Blog/blogSlice').blogActions;
const authorsActions = require('./app/features/Authors/authorsSlice').authorsActions;
const fetchUsers = require('./app/features/users/usersSlice').fetchUsers;
const fetchImages = require('./app/features/images/imageSlice').fetchImages;

// console.log('initial state:', store.getState());
// const unsubscribe = store.subscribe(() => console.log('Updated state:', store.getState()));

console.log('initial state:', JSON.stringify(store.getState(), null, 2));
const unsubscribe = store.subscribe(() => console.log('Updated state:', JSON.stringify(store.getState(), null, 2)));

store.dispatch(fetchUsers());
store.dispatch(fetchImages());

// store.dispatch(blogActions.postBlog([{ title: 'First Blog', content: 'This is the first blog', author: {name: 'riches and welth'} }]));
// store.dispatch(blogActions.postBlog([{ title: 'Second Blog', content: 'This is the second blog', author: {name: 'Cool Guy'} }]));
// store.dispatch(blogActions.postBlog([{ title: 'Third Blog', content: 'This is the third blog', author: {name: 'Adam Smith'} }]));

// store.dispatch(authorsActions.postAuthor({ name: 'John Doe' }));
// store.dispatch(authorsActions.postAuthor({ name: 'Jane Doe' }));
// store.dispatch(authorsActions.postAuthor({ name: 'Jack Doe' }));

// unsubscribe();