import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./userInitialState";
import { currentUserThunk } from "redux/auth/authThunk";
import {
  updateUserInfoThunk,
  generateGravatarUserInfoThunk,
} from "./userThunk";
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
      })
      .addCase(currentUserThunk.fulfilled, (state, action) => {
        state.statuses.current = status.FULFILLED;
        state.id = action.payload.id;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.image = action.payload.image;
        state.description = action.payload.description;
        state.errors.current = null;
      })
      .addCase(currentUserThunk.rejected, (state, action) => {
        state.statuses.current = status.REJECTED;
        state.errors.current = action.payload;
      })

      // update
      .addCase(updateUserInfoThunk.pending, (state) => {
        state.statuses.current = status.PENDING;
        state.errors.current = null;
      })
      .addCase(updateUserInfoThunk.fulfilled, (state, action) => {
        state.statuses.update = status.FULFILLED;
        state.username = action.payload.username;
        state.image = action.payload.image;
        state.description = action.payload.description;
        state.errors.update = null;
      })
      .addCase(updateUserInfoThunk.rejected, (state, action) => {
        state.statuses.update = status.REJECTED;
        state.errors.update = action.payload;
      })

      // generate gravatar
      .addCase(generateGravatarUserInfoThunk.pending, (state) => {
        state.statuses.generateGravatar = status.PENDING;
        state.errors.generateGravatar = null;
      })
      .addCase(generateGravatarUserInfoThunk.fulfilled, (state, action) => {
        state.statuses.generateGravatar = status.FULFILLED;
        state.image = action.payload.gravatar;
        state.errors.generateGravatar = null;
      })
      .addCase(generateGravatarUserInfoThunk.rejected, (state, action) => {
        state.statuses.generateGravatar = status.REJECTED;
        state.errors.generateGravatar = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
