import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./authInitialState";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registration(state, action) {},
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state, action) {
      state.login = null;
      state.isLoggedIn = false;
    },
    current(state, action) {},
  },
});

export const { registration, logIn, logOut, current } = authSlice.actions;
