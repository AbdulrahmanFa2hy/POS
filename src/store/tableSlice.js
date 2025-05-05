import { createSlice } from '@reduxjs/toolkit';
import { tables as initialTables } from '../data/tables';

const initialState = {
  tables: initialTables,
  selectedTables: [],
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setTables: (state, action) => {
      state.tables = action.payload;
    },
    updateTableStatus: (state, action) => {
      const { id, status, timer } = action.payload;
      const table = state.tables.find(t => t.id === id);
      if (table) {
        table.status = status;
        if (timer !== undefined) table.timer = timer;
      }
    },
    selectTable: (state, action) => {
      if (!state.selectedTables.includes(action.payload)) {
        state.selectedTables.push(action.payload);
      }
    },
    deselectTable: (state, action) => {
      state.selectedTables = state.selectedTables.filter(id => id !== action.payload);
    },
    clearSelectedTables: (state) => {
      state.selectedTables = [];
    },
  },
});

export const {
  setTables,
  updateTableStatus,
  selectTable,
  deselectTable,
  clearSelectedTables,
} = tableSlice.actions;

export const selectTables = (state) => state.table.tables;
export const selectSelectedTables = (state) => state.table.selectedTables;

export default tableSlice.reducer; 