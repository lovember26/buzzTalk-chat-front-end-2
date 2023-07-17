import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("users/signup", credentials);
      console.log("credentials", credentials);
      //   token.set(data.token);
      //   toast.success('Вітаю! Ви успішно зареєструватися у PHONEBOOCK!', {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
      return data;
    } catch (error) {
      //   toast.error(
      //     'Невірний формат електронної пошти або паролю, спробуйте ще.',
      //     {
      //       position: toast.POSITION.TOP_RIGHT,
      //     }
      //   );
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("users/login", credentials);
      //   console.log("credentials", credentials);
      //   token.set(data.token);
      //   toast.success('Вітаю! Ви успішно зареєструватися у PHONEBOOCK!', {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
      return data;
    } catch (error) {
      //   toast.error(
      //     'Невірний формат електронної пошти або паролю, спробуйте ще.',
      //     {
      //       position: toast.POSITION.TOP_RIGHT,
      //     }
      //   );
      return rejectWithValue(error.message);
    }
  }
);
