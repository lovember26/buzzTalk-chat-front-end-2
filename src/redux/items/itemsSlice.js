import { createSlice } from "@reduxjs/toolkit";
import { fetchItems, deleteItem } from "./itemsThunk";
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
        state.statuses.get = status.FULFILLED;
        state.entities = payload;
      })
      .addCase(fetchItems.rejected, (state, { payload }) => {
        state.statuses.get = status.REJECTED;
        state.errors.get = payload;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        console.log("action deleteItem.fulfilled", action);
        state.entities = state.entities.filter(
          (item) => item.id !== action.meta.arg
        );
      });
  },
});

export const itemsReducer = itemsSlice.reducer;
