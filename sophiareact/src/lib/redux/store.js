   // lib/store.js
    import { configureStore } from '@reduxjs/toolkit';
    // Import your slices here
    import counterReducer from './features/counter/counterSlice';

    export const store = configureStore({
      reducer: {
        // Add your reducers here
        counter: counterReducer,
      },
    });