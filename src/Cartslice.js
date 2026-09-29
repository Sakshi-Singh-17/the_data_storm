import { createSlice } from "@reduxjs/toolkit";


const Cartslice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },

    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },

    clearCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
} = Cartslice.actions;

export default Cartslice.reducer;