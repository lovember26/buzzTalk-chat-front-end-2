import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "services";
import { successNotification } from "helpers/notification";

export const fetchAllUsersThunk = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const users = await userAPI.fetchAllUsersService();
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserInfoThunk = createAsyncThunk(
  "users/update",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await userAPI.updateUserService(credentials);
      successNotification("Updating successful");

      return data;
    } catch (error) {
      console.log("error updateUserInfoThunk", error);
      return rejectWithValue(error.message);
    }
  }
);

export const generateGravatarUserInfoThunk = createAsyncThunk(
  "users/generate-gravatar",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await userAPI.generateGravatarUserService(credentials);
      successNotification("Generating successful");

      return data;
    } catch (error) {
      console.log("error generateGravatarUserInfoThunk", error);
      return rejectWithValue(error.message);
    }
  }
);

export const removeUserAvatarInfoThunk = createAsyncThunk(
  "users/remove-avatar",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await userAPI.removeUserAvatarService(credentials);
      successNotification("Successful remove avatar");

      return data;
    } catch (error) {
      console.log("error generateGravatarUserInfoThunk", error);
      return rejectWithValue(error.message);
    }
  }
);
