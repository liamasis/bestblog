import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const apiURL = "http://127.0.0.1:8000/blog"

const initialState = {
    posts: [],
    status: "idle",
    error: null,
}

export const fetchPostById = createAsyncThunk(
    'post/fetchPostById',
    async (postID) => {
        const response = await.get(`${apiURL}${}`)
    }
)