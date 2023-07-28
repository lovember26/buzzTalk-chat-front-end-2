import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./userInitialState";
import { currentUserThunk } from "redux/auth/authThunk";
import { status } from "constants";

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder

      // current
      .addCase(currentUserThunk.pending, (state) => {
        state.statuses.current = status.PENDING;
        state.errors.current = null;
        state.isLoggedIn = false;
      })
      .addCase(currentUserThunk.fulfilled, (state, action) => {
        state.statuses.current = status.FULFILLED;
        state.id = action.payload.id;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.first_name = action.payload.first_name;
        state.last_name = action.payload.last_name;
        state.errors.current = null;
        state.isLoggedIn = true;
      })
      .addCase(currentUserThunk.rejected, (state, action) => {
        state.statuses.current = status.REJECTED;
        state.errors.current = action.payload;
        state.isLoggedIn = false;
      });
  },
});

export const userReducer = userSlice.reducer;
