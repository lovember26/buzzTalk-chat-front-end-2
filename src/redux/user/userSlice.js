import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./userInitialState";
import { currentUserThunk } from "redux/auth/authThunk";
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(currentUserThunk.pending, handlePending)
      .addCase(currentUserThunk.fulfilled, (state, action) => {
        console.log(
          "action.payload currentUserThunk userSlice",
          action.payload
        );

        state.id = action.payload.id;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.first_name = action.payload.first_name;
        state.last_name = action.payload.last_name;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(currentUserThunk.rejected, handleRejected);
  },
});

export const userReducer = userSlice.reducer;
