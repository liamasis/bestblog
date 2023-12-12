import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './features/blogger/bloggerSlice'

//import counterReducer from './features/counter/counterSlice'

export default configureStore({
    reducer: {
        posts: postsReducer
    }
})

