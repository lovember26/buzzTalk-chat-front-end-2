import { createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "./itemsOperations";
import { initialState } from "./itemsInitialState";

const itemsSlice = createSlice({
  name: "items",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchItems.fulfilled, (state, { payload }) => {
        state.entities = payload;
      })
      .addCase(fetchItems.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export default itemsSlice.reducer;
