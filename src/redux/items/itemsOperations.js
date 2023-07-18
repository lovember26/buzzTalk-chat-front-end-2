import { createAsyncThunk } from "@reduxjs/toolkit";
import { itemsAPI } from "services";
import { successNotification } from "helpers/notification";
import { errorHandler } from "helpers/errorHandler";

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (_, { rejectWithValue }) => {
    try {
      const items = await itemsAPI.fetchItems();
      return items;
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  }
);

export const deleteItem = createAsyncThunk(
  "items/deleteItem",
  async (id, { rejectWithValue }) => {
    try {
      const items = await itemsAPI.deleteItem(id);

      successNotification("Removed success!");

      return items;
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  }
);
