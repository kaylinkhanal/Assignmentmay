// lib/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'; // Example slice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here
  },
});