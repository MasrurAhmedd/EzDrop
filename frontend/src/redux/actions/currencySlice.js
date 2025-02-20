// redux/slices/currencySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCurrency: 'USD',
  conversionRates: {
    USD: 1,
    EUR: 0.93,
    GBP: 0.80,
    INR: 82.90,
    JPY: 148.66
  }
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;