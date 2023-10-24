import { createAsyncThunk } from "@reduxjs/toolkit";
import { chatAPI } from "services";
// import { successNotification } from "helpers/notification";

export const fetchAllChatsThunk = createAsyncThunk(
  "chat/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const messages = await chatAPI.getAllChatsService();
      console.log("messages in fetchAllMessages", messages);
      return messages;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchChatByIdThunk = createAsyncThunk(
  "chat/fetchMessageById",
  async (credentials, { rejectWithValue }) => {
    try {
      const chat = await chatAPI.getChatByIdService(credentials);
      console.log("chat", chat);
      return chat;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createChatThunk = createAsyncThunk(
  "chat/createMessage",
  async (credentials, { rejectWithValue }) => {
    try {
      const messages = await chatAPI.createChatService(credentials);
      return messages;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteChatByIdThunk = createAsyncThunk(
  "chat/deleteMessage",
  async (credentials, { rejectWithValue }) => {
    try {
      await chatAPI.deleteChatByIdService(credentials);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateChatByIdThunk = createAsyncThunk(
  "chat/updateMessage",
  async (credentials, { rejectWithValue }) => {
    try {
      const messages = await chatAPI.updateChatByIdService(credentials);
      return messages;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeChatByIdThunk = createAsyncThunk(
  "chat/changeMessage",
  async (credentials, { rejectWithValue }) => {
    try {
      const messages = await chatAPI.changeChatByIdService(credentials);
      return messages;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
