import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./authInitialState";
import { registerThunk, logInThunk, logOutThunk } from "./authThunk";
import { status } from "constants";

const handlePending = (state) => {
  state.status = status.PENDING;
  state.error = null;
  state.isLoggedIn = false;
};

const handleRejected = (state, action) => {
  state.status = status.REJECTED;
  state.error = action.payload;
  state.isLoggedIn = false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(registerThunk.pending, handlePending)
      .addCase(registerThunk.fulfilled, (state, action) => {
        console.log("register.fulfilled action", action);
        state.user = action.payload;
        state.status = status.FULFILLED;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.status = status.REJECTED;
        state.error = action.payload;
        state.isLoggedIn = false;
      })

      .addCase(logInThunk.pending, (state) => {
        state.status.login = status.PENDING;
        state.error.login = null;
        state.isLoggedIn = false;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        console.log("logIn.fulfilled action", action);
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(logInThunk.rejected, handleRejected)

      .addCase(logOutThunk.pending, handlePending)
      .addCase(logOutThunk.fulfilled, (state) => {
        state.user = {
          username: "",
          password: "",
          confirm_password: "",
          email: "",
          first_name: "",
          last_name: "",
        };
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(logOutThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
