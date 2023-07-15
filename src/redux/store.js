import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { authSlice } from "./auth/authSlice";
import { userSlice } from "./user/userSlice";
import { myItemSlice } from "./items/slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    item: myItemSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
