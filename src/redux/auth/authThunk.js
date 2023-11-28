import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "services";
import { selectAccessToken } from "./authSelectors";
import { successNotification, errorNotification } from "helpers/notification";

axios.defaults.baseURL = "https://buzz-talk-api.onrender.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await authAPI.registerUserService(credentials);
      successNotification("Successful registration!");
      return data;
    } catch (error) {
      console.log("Incorrect email or password format, please try again.");
      errorNotification(
        "Incorrect email or password format, please try again."
      );
      return rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await authAPI.loginUserService(credentials);
      token.set(data.access);
      successNotification("Welcome to the app!");
      return data;
    } catch (error) {
      console.log(error);
      errorNotification(
        "Incorrect email or password format, please try again."
      );
      return rejectWithValue(error.response.data);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    token.unset();

    try {
      return successNotification("See you soon!");
    } catch (error) {
      errorNotification("An error occurred when exiting the application.");
      return rejectWithValue(error.message);
    }
  }
);

export const currentUserThunk = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const persistedToken = selectAccessToken(thunkAPI.getState());
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const data = await authAPI.currentUserService(persistedToken);
      return data;
    } catch (error) {
      errorNotification("An error occurred while retrieving the user.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
