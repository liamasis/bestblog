import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const apiURL = 'http://127.0.0.1:8000/category/'

const initialState = {
  categories: [],
  status: 'idle',
  error: null,
}

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get(apiURL)
    //console.log('fuck me', response.data)
    return response.data
  }
)

const categorySlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.categories = action.payload
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const selectAllCategories = (state) => state.categories.categories
export const getCategoryStatus = (state) => state.categories.status
export const getCategoryError = (state) => state.categories.error

export default categorySlice.reducer
