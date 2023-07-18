import { createAsyncThunk } from "@reduxjs/toolkit";
import { successNotification, errorNotification } from "helpers/notification";
// import axios from "axios";
// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      console.log("credentials register createAsyncThunk", credentials);
      console.log("Вітаю! Ви успішно зареєструватися!");
      return successNotification("Вітаю! Ви успішно зареєструватися!");
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
      console.log("credentials login createAsyncThunk", credentials);
      console.log("Вітаю! Ви успішно увійшли в додаток!");
      return successNotification("Вітаю! Ви успішно увійшли в додаток!");
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
