import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./itemsInitialState";

export const myItemSlice = createSlice({
  name: "myItem",
  initialState,
  reducers: {
    add(state, action) {
      return state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = myItemSlice.actions;
