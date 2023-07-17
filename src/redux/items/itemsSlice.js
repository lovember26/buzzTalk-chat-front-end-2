import { createSlice } from "@reduxjs/toolkit";
import { fetchItems, deleteItem } from "./itemsOperations";
import { initialState } from "./itemsInitialState";
import { status } from "constants";

const itemsSlice = createSlice({
  name: "items",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.statuses.get = status.PENDING;
        state.errors.get = null;
      })
      .addCase(fetchItems.fulfilled, (state, { payload }) => {
        console.log("payload entities", payload);
        state.statuses.get = status.FULFILLED;
        state.entities = payload;
      })
      .addCase(fetchItems.rejected, (state, { payload }) => {
        state.statuses.get = status.REJECTED;
        state.errors.get = payload;
      })
      .addCase(deleteItem.pending, (state) => {
        state.statuses.get = status.PENDING;
        state.errors.get = null;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.statuses.get = status.FULFILLED;
      })
      .addCase(deleteItem.rejected, (state, { payload }) => {
        state.statuses.get = status.REJECTED;
        state.errors.get = payload;
      });
  },
});

export default itemsSlice.reducer;
