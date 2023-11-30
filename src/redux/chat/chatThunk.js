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

export const fetchAllPublicChatsThunk = createAsyncThunk(
  "chat/fetchAllPublic",
  async (_, { rejectWithValue }) => {
    try {
      const chats = await chatAPI.getPublicChatsService();
      return chats;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createPrivateChatThunk = createAsyncThunk(
  "chat/createPrivateChat",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await chatAPI.createPrivateChatService(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createPublicChatThunk = createAsyncThunk(
  "chat/createPublicChat",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await chatAPI.createPublicChatService(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const replyMessageThunk = createAsyncThunk(
  "chat/replyMessageChat",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await chatAPI.replyMessageService(credentials);
      return data;
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
