import axios from 'axios'
import { createAsyncThunk, createSlice, isFulfilled } from '@reduxjs/toolkit'

const apiURL = "http://127.0.0.1:8000/blog"

const initialState = {
    posts: [],
    status: "idle",
    error: null,
}

export const fetchPostById = createAsyncThunk(
    'post/fetchPostById',
    async (postID) => {
        const response = axios.get(`${apiURL}${postID}`)
        return response.data
    }
)

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder.addCase(fetchPostById.pending, (state, action) => {
            state.status = 'loading'
        }).addCase(fetchPostById.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.post = action.payload
        }).addCase(fetchPostById.rejected, (state, action) => {
            state.status = 'failed'
            state.post = action.error.message
        })
    }
})

export const selectPost = (state) => state.post.post
export const getPostStatus = (state) => state.post.status
export const getPostError = (state) => state.post.error

export default blogSlice