import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./userInitialState";

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// eslint-disable-next-line no-empty-pattern
export const {} = userSlice.actions;
