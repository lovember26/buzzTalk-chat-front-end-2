import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserService, loginUserService } from "services/authApi";
import { successNotification, errorNotification } from "helpers/notification";
// import axios from "axios";
// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      console.log("Вітаю! Ви успішно зареєструватися!");
      const { data } = await registerUserService(credentials);
      successNotification("Вітаю! Ви успішно зареєструватися!");
      return data;
    } catch (error) {
      console.log(
        "Невірний формат електронної пошти або паролю, спробуйте ще."
      );
      errorNotification(
        "Невірний формат електронної пошти або паролю, спробуйте ще."
      );
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      console.log("Вітаю! Ви успішно увійшли в додаток!");
      const { data } = await loginUserService(credentials);
      successNotification("Вітаю! Ви успішно увійшли в додаток!");
      return data;
    } catch (error) {
      errorNotification(
        "Невірний формат електронної пошти або паролю, спробуйте ще."
      );
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      console.log("Вітаю! Ви успішно вийшли з додатку!");
      return successNotification("Вітаю! Ви успішно вийшли з додатку!");
    } catch (error) {
      errorNotification("Сталася помилка при виході з додатку.");
      return rejectWithValue(error.message);
    }
  }
);
