import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from './features/blogs/blogsSlice';

// Configure the store with the blogs reducer
export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});

// Define the RootState type based on the store's reducers
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type based on the store's dispatch function
export type AppDispatch = typeof store.dispatch;

export default store;
