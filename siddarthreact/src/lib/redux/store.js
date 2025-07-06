// lib/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'; // Example slice
import circleReducer from './features/circle/circleSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    circle: circleReducer,
  },
});