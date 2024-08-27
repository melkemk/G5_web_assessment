import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Blog from '../../../../type/blog'; // Adjust the import path as needed


interface BlogsState {
  blogs: Blog[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BlogsState = {
  blogs: [],
  status: 'idle',
  error: null,
};

export const fetchBlogs = createAsyncThunk<Blog[]>('blogs/fetchBlogs', async () => {
  const response = await axios.get('https://a2sv-backend.onrender.com/api/blogs');
  return response.data;
});

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch blogs';
      });
  },
});


export default blogsSlice.reducer;
