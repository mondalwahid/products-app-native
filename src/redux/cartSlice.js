// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Array to store items in the cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, increment its quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // If the item doesn't exist, add it to the cart with a quantity of 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        // If the item exists, increase its quantity
        state.items[itemIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        // If the item exists and quantity is more than 1, decrease its quantity
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
