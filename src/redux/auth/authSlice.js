import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
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

const persistConfig = {
  key: "auth",
  storage,
  // whitelist: ["refreshToken", "accessToken"],
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const { registration, logIn, logOut, current } = authSlice.actions;
