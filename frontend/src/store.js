import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './features/blogger/bloggerSlice'
import postReducer from './features/blogger/blogSlice'
import categoryReducer from './features/categories/categorySlice'
//import counterReducer from './features/counter/counterSlice'


export default configureStore({
    reducer: {
        posts: postsReducer,
        post: postReducer,
        categories: categoryReducer,
    }
})

