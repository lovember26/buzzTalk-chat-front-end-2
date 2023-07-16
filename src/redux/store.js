import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import { persistedAuthReducer } from "./auth/authSlice";
import { userSlice } from "./user/userSlice";
import itemsSlice from "./items/itemsSlice";

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    user: userSlice.reducer,
    items: itemsSlice,
  },
  // In order to remove the error "A non-serializable value was detected in an action, in the path: `register`"
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      // In order to display the store change in DevTools
    }).concat(logger),
});

export const persistedStore = persistStore(store);
