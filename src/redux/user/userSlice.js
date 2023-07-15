import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./userInitialState";

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// eslint-disable-next-line no-empty-pattern
export const {} = userSlice.actions;

// With Persist

// import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { initialState } from "./userInitialState";

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {},
// });

// const persistConfig = {
//   key: "user",
//   storage,
//   // whitelist: ["refreshToken", "accessToken"],
// };

// export const persistedUserReducer = persistReducer(
//   persistConfig,
//   userSlice.reducer
// );

// // eslint-disable-next-line no-empty-pattern
// export const {} = userSlice.actions;
