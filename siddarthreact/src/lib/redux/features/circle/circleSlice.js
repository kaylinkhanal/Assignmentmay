import { createSlice } from '@reduxjs/toolkit';

const circleSlice = createSlice({
  name: 'circle',
  initialState: { 
    radius: 50,
    backgroundColor: 'blue',
    x: 0,
    y: 0,
    shape: 'circle'
  },
  reducers: {
    incrementRadius: (state) => {
      state.radius += 5;
    },
    decrementRadius: (state) => {
      state.radius -= 5;
    },
    moveLeft: (state) => {
      state.x -= 10;
    },
    moveRight: (state) => {
      state.x += 10;
    },
    moveUp: (state) => {
      state.y -= 10;
    },
    moveDown: (state) => {
      state.y += 10;
    },
    toggleShape: (state) => {
      state.shape = state.shape === 'circle' ? 'box' : 'circle';
    },
  },
});

export const { incrementRadius, decrementRadius,moveLeft, moveRight,moveUp,moveDown,toggleShape } = circleSlice.actions;
export default circleSlice.reducer;
