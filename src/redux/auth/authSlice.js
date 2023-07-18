import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./authInitialState";
import { register, logIn, logOut } from "./authThunk";

const handlePending = (state) => {
  state.isLoggedIn = false;
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        console.log("register.fulfilled", action.meta.arg);
        // state.user = action.payload.user;
        state.user = action.meta.arg;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, handleRejected)

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        console.log("logIn.fulfilled", action.meta.arg);
        state.user = action.meta.arg;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logIn.rejected, handleRejected)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: "", email: "", password: "" };
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOut.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
