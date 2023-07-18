import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import logger from "redux-logger";
import { authReducer } from "./auth/authSlice";
import itemsSlice from "./items/itemsSlice";

const persistConfig = {
  key: "auth",
  storage,
  // whitelist: ["refreshToken", "accessToken"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    items: itemsSlice,
  },
  // In order to remove the error "A non-serializable value was detected in an action, in the path: `register`"
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      // In order to display the store change in DevTools
    }),
  // .concat(logger),
});

export const persistedStore = persistStore(store);
