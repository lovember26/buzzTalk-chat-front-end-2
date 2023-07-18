import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserService, loginUserService } from "services/authApi";
import { successNotification, errorNotification } from "helpers/notification";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      console.log("Successful registration!");
      const data = await registerUserService(credentials);
      console.log("data registerThank", data);
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
      console.log("Successful log in!");
      const data = await loginUserService(credentials);
      successNotification("Welcome to the app!");
      console.log("data token logInThank", data);
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
      console.log("Successful log out.");
      return successNotification("See you soon!");
    } catch (error) {
      errorNotification("An error occurred when exiting the application.");
      return rejectWithValue(error.message);
    }
  }
);
