// app/store/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const boxSlice = createSlice({
  name: 'box',
  initialState: { 
     width: 100, 
     height: 100,
     backgroundColor: 'red'
   },
  reducers: {
    incrementHeight: (state) => {
      state.height += 10;
    },
    decrementHeight: (state) => {
      state.height -= 10;
    },
  },
});

export const { incrementHeight, decrementHeight } = boxSlice.actions;
export default boxSlice.reducer;