import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: [{
    addCart: (state, actions) => {
      state.push(actions.payload)
    }
  }]
});

export const {addCart} = cartSlice.actions;

export default cartSlice.reducer;