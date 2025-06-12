import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, actions){
      state.push(actions.payload)
    },
    removeCart(state, actions){
      return state.filter(item => item.id !== actions.payload.id);
    }
  }
});

export const {addCart, removeCart} = cartSlice.actions;

export default cartSlice.reducer;