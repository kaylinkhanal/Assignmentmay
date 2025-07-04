    // lib/store.js
    import { configureStore } from '@reduxjs/toolkit';
    // Import your reducers here
    import counterReducer from './features/counter/counterSlice';

    export const makeStore = () => {
      return configureStore({
        reducer: {
          // Add your reducers here
          counter: counterReducer,
        },
      });
    };