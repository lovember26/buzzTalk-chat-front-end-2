import { createAsyncThunk } from "@reduxjs/toolkit";
import { itemsAPI } from "services";

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (_, { rejectWithValue }) => {
    try {
      const items = await itemsAPI.fetchItems();
      return items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
