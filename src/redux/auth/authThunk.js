import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  registerUserService,
  loginUserService,
  currentUserService,
} from "services/authApi";
import { selectAccessToken } from "./authSelectors";
import { successNotification, errorNotification } from "helpers/notification";

axios.defaults.baseURL =
  "http://buzz-talk-api.eu-west-3.elasticbeanstalk.com/api/accounts";

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
      // console.log("Successful registration!");
      const data = await registerUserService(credentials);
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
      // console.log("Successful log in!");
      const data = await loginUserService(credentials);
      token.set(data.access);
      successNotification("Welcome to the app!");
      return data;
    } catch (error) {
      errorNotification(
        "Incorrect email or password format, please try again."
      );
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      // console.log("Successful log out.");
      token.unset();
      return successNotification("See you soon!");
    } catch (error) {
      errorNotification("An error occurred when exiting the application.");
      return rejectWithValue(error.message);
    }
  }
);

export const currentUserThunk = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    const accessToken = selectAccessToken(getState());

    try {
      const data = await currentUserService(accessToken);
      token.set(accessToken);

      return data;
    } catch (error) {
      errorNotification("An error occurred while retrieving the user.");
      return rejectWithValue(error.message);
    }
  }
);
