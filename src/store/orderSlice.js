import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderItems: [],
  selectedCategory: 1, // Default to Breakfast
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      const existingIndex = state.orderItems.findIndex(item => item.id === action.payload.id);
      
      if (existingIndex >= 0) {
        state.orderItems[existingIndex].quantity += 1;
      } else {
        state.orderItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromOrder: (state, action) => {
      state.orderItems = state.orderItems.filter(item => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.orderItems.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.orderItems.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Remove the item if quantity is 1 and decrease is clicked
          state.orderItems = state.orderItems.filter(i => i.id !== action.payload);
        }
      }
    },
    clearOrder: (state) => {
      state.orderItems = [];
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  addToOrder,
  removeFromOrder,
  increaseQuantity,
  decreaseQuantity,
  clearOrder,
  setSelectedCategory,
} = orderSlice.actions;

export const selectOrderItems = (state) => state.order.orderItems;
export const selectSelectedCategory = (state) => state.order.selectedCategory;
export const selectOrderTotal = (state) => 
  state.order.orderItems.reduce((total, item) => total + (item.price * item.quantity), 0);
export const selectTax = (state) => selectOrderTotal(state) * 0.04;
export const selectFinalTotal = (state) => selectOrderTotal(state) + selectTax(state);

export default orderSlice.reducer;