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

// export const fetchAllPublicChatsThunk = createAsyncThunk(
//   "chat/fetchAllPublic",
//   async (_, { rejectWithValue }) => {
//     try {
//       const chats = await chatAPI.getPublicChatsService();
//       return chats;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const fetchAllPublicChatsThunk = createAsyncThunk(
  "chat/fetchAllPublic",
  async (credentials, { rejectWithValue }) => {
    try {
      const chats = await chatAPI.getPublicChatsService(credentials);
      return chats;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getChatBySlugThunk = createAsyncThunk(
  "chat/getChatBySlug",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await chatAPI.getChatBySlugService(credentials);
      return data;
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

export const updatePublicChatThunk = createAsyncThunk(
  "chat/updatePublicChat",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await chatAPI.updatePublicChatService(credentials);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const generatePublicChatTGravatarThunk = createAsyncThunk(
  "chat/generatePublicChatGravatar",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await chatAPI.generatePublicChatGravatarService(credentials);

      return data;
    } catch (error) {
      console.log("error generateGravatarUserInfoThunk", error);
      return rejectWithValue(error.message);
    }
  }
);

export const removePublicChatImageThunk = createAsyncThunk(
  "chat/removePublicChatImage",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await chatAPI.removePublicChatImageService(credentials);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Not used =====================================

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
