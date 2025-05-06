import { createSlice } from '@reduxjs/toolkit';
import maxValues from '../Utils/maxValues';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchDataSuccess(state, action) {
      state.data = action.payload;
      state.selectedRow = maxValues(action.payload);
      state.chartData = state.selectedRow?.values || null;
    },
    clearData() {
      return initialState;
    },
    selectRow(state, action) {
      state.selectedRow = action.payload;
      state.chartData = action.payload?.values || null;
    },
  },
});

export const { fetchDataSuccess, clearData, selectRow } = dataSlice.actions;
export default dataSlice.reducer;