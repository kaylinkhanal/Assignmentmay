// app/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'; // Example slice
import boxReducer from './features/box/boxSlice'; // Example slice


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    box: boxReducer
    // Add other reducers here
  },
});