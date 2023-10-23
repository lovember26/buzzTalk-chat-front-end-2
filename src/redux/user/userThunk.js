import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllUsersService,
  updateUserService,
  generateGravatarUserService,
  removeUserAvatarService,
} from "services/userApi";

// import { userAPI } from "services";
import { successNotification } from "helpers/notification";

export const fetchAllUsersThunk = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const users = await fetchAllUsersService();
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
      const data = await updateUserService(credentials);
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
      const data = await generateGravatarUserService(credentials);
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
      const data = await removeUserAvatarService(credentials);
      successNotification("Successful remove avatar");

      return data;
    } catch (error) {
      console.log("error generateGravatarUserInfoThunk", error);
      return rejectWithValue(error.message);
    }
  }
);
