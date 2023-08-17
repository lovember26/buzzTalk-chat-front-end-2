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
        // state.isLoggedIn = false;
      })
      .addCase(currentUserThunk.fulfilled, (state, action) => {
        // console.log("currentUserThunk action", action);
        state.statuses.current = status.FULFILLED;
        state.id = action.payload.id;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.image = action.payload.image;
        state.description = action.payload.description;
        // state.first_name = action.payload.first_name;
        // state.last_name = action.payload.last_name;
        state.errors.current = null;
        // state.isLoggedIn = true;
      })
      .addCase(currentUserThunk.rejected, (state, action) => {
        state.statuses.current = status.REJECTED;
        state.errors.current = action.payload;
        // state.isLoggedIn = false;
      })

      // update
      .addCase(updateUserInfoThunk.pending, (state) => {
        state.statuses.current = status.PENDING;
        state.errors.current = null;
        // state.isLoggedIn = false;
      })
      .addCase(updateUserInfoThunk.fulfilled, (state, action) => {
        state.statuses.update = status.FULFILLED;
        // state.id = action.payload.id;
        // state.username = action.payload.username;
        // state.email = action.payload.email;
        // state.image = action.payload.image;
        // state.description = action.payload.description;
        // state.first_name = action.payload.first_name;
        // state.last_name = action.payload.last_name;
        state.username = action.payload.username;
        state.image = action.payload.image;
        state.description = action.payload.description;
        state.errors.update = null;
        // state.isLoggedIn = true;
      })
      .addCase(updateUserInfoThunk.rejected, (state, action) => {
        state.statuses.update = status.REJECTED;
        state.errors.update = action.payload;
        // state.isLoggedIn = false;
      })

      // generate gravatar
      .addCase(generateGravatarUserInfoThunk.pending, (state) => {
        state.statuses.generateGravatar = status.PENDING;
        state.errors.generateGravatar = null;
        // state.isLoggedIn = false;
      })
      .addCase(generateGravatarUserInfoThunk.fulfilled, (state, action) => {
        // console.log("action.payload.gravatar", action.payload.gravatar);
        state.statuses.generateGravatar = status.FULFILLED;
        // state.id = action.payload.id;
        // state.username = action.payload.username;
        // state.email = action.payload.email;
        // state.image = action.payload.image;
        // state.description = action.payload.description;
        // state.first_name = action.payload.first_name;
        // state.last_name = action.payload.last_name;
        // state.username = action.payload.username;
        state.image = action.payload.gravatar;
        // state.description = action.payload.description;
        state.errors.generateGravatar = null;
        // state.isLoggedIn = true;
      })
      .addCase(generateGravatarUserInfoThunk.rejected, (state, action) => {
        state.statuses.generateGravatar = status.REJECTED;
        state.errors.generateGravatar = action.payload;
        // state.isLoggedIn = false;
      });
  },
});

export const userReducer = userSlice.reducer;
