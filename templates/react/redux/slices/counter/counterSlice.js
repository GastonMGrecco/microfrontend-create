import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment (state) {
      state.counter++;
    },
    decrement (state) {
      state.counter--;
    },
    reset (state) {
      state.counter = 0;
    },
    incrementByAmount (state, action) {
      state.counter += action.payload;
    }
  }
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
