import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './orderSlice';
import tableReducer from './tableSlice';

export const store = configureStore({
  reducer: {
    order: orderReducer,
    table: tableReducer,
  },
});