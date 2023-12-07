import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

// Define the action type for fetching data
const FETCH_DATA = "getProducts";

// thunk to fetch data
export const getProducts = createAsyncThunk(FETCH_DATA, async () => {
  const response = await api.productService.getAll();
  return response.data.data;
});

// Initial state
const initialState = {
  value: [],
  loading: false,
  error: null,
};

//Redux Slice
export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// reducer
export default productSlice.reducer;
