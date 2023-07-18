import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./userInitialState";

// const handlePending = (state) => {
//   state.isLoggedIn = false;
//   state.isLoading = true;
//   state.error = null;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {},
});

export const userReducer = userSlice.reducer;
