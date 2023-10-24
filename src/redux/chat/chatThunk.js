import { createAsyncThunk } from "@reduxjs/toolkit";
import { chatAPI } from "services";
// import { successNotification } from "helpers/notification";

export const fetchAllMessagesThunk = createAsyncThunk(
  "chat/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const messages = await chatAPI.getMessagesService();
      console.log("messages in fetchAllMessages", messages);
      return messages;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMessageByIdThunk = createAsyncThunk(
  "chat/fetchMessageById",
  async (credentials, { rejectWithValue }) => {
    try {
      const messages = await chatAPI.getChatByIdService(credentials);
      return messages;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createMessageThunk = createAsyncThunk(
  "chat/createMessage",
  async (credentials, { rejectWithValue }) => {
    try {
      const messages = await chatAPI.createMessagesService(credentials);
      return messages;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteMessageByIdThunk = createAsyncThunk(
  "chat/deleteMessage",
  async (credentials, { rejectWithValue }) => {
    try {
      await chatAPI.deleteChatByIdService(credentials);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateMessageThunk = createAsyncThunk(
  "chat/updateMessage",
  async (credentials, { rejectWithValue }) => {
    try {
      const messages = await chatAPI.updateMessageService(credentials);
      return messages;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeMessageThunk = createAsyncThunk(
  "chat/changeMessage",
  async (credentials, { rejectWithValue }) => {
    try {
      const messages = await chatAPI.changeMessageService(credentials);
      return messages;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
