import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./authInitialState";
import { registerThunk, logInThunk, logOutThunk } from "./authThunk";
import { status } from "constants";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder

      // registerThunk
      .addCase(registerThunk.pending, (state) => {
        state.statuses.register = status.PENDING;
        state.errors.register = null;
        state.isLoggedIn = false;
      })
      .addCase(registerThunk.fulfilled, (state) => {
        state.statuses.register = status.FULFILLED;
        state.errors.register = null;
        state.isLoggedIn = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.statuses.register = status.REJECTED;
        state.errors.register = action.payload;
        state.isLoggedIn = false;
      })

      // logInThunk
      .addCase(logInThunk.pending, (state) => {
        state.statuses.login = status.PENDING;
        state.errors.login = null;
        state.isLoggedIn = false;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.statuses.login = status.FULFILLED;
        state.errors.login = null;
        state.isLoggedIn = true;
      })
      .addCase(logInThunk.rejected, (state, action) => {
        state.statuses.login = status.REJECTED;
        state.errors.login = action.payload;
        state.isLoggedIn = false;
      })

      // logOutThunk
      .addCase(logOutThunk.pending, (state) => {
        state.statuses.logout = status.PENDING;
        state.errors.logout = null;
        state.isLoggedIn = false;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.statuses.logout = status.FULFILLED;
        state.accessToken = null;
        state.refreshToken = null;
        state.errors.logout = null;
        state.isLoggedIn = false;
      })
      .addCase(logOutThunk.rejected, (state, action) => {
        state.statuses.logout = status.REJECTED;
        state.errors.logout = action.payload;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
