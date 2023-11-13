import { createAsyncThunk } from "@reduxjs/toolkit";
import { chatAPI } from "services";

export const fetchAllPrivateChatsThunk = createAsyncThunk(
  "chat/fetchAllPrivate",
  async (_, { rejectWithValue }) => {
    try {
      const chats = await chatAPI.getPrivateChatsService();
      return chats;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Not used =====================================

export const fetchAllChatsThunk = createAsyncThunk(
  "chat/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const chats = await chatAPI.getAllChatsService();
      return chats;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchChatByIdThunk = createAsyncThunk(
  "chat/fetchChatById",
  async (credentials, { rejectWithValue }) => {
    try {
      const chat = await chatAPI.getChatByIdService(credentials);
      return chat;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createChatThunk = createAsyncThunk(
  "chat/createChat",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await chatAPI.createChatService(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteChatByIdThunk = createAsyncThunk(
  "chat/deleteChat",
  async (credentials, { rejectWithValue }) => {
    try {
      await chatAPI.deleteChatByIdService(credentials);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateChatByIdThunk = createAsyncThunk(
  "chat/updateChat",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await chatAPI.updateChatByIdService(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeChatByIdThunk = createAsyncThunk(
  "chat/changeChat",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await chatAPI.changeChatByIdService(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
