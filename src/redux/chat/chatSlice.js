import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./chatState";
import {
  fetchAllPrivateChatsThunk,
  // fetchAllChatsThunk,
  // fetchChatByIdThunk,
  // createChatThunk,
  // deleteChatByIdThunk,
  // updateChatByIdThunk,
  // changeChatByIdThunk,
} from "./chatThunk";
import { status } from "constants";

//Finish the functionality chatSlice
export const chatSlice = createSlice({
  name: "chat",
  initialState,
  extraReducers: (builder) => {
    builder
      // fetch all messages
      .addCase(fetchAllPrivateChatsThunk.pending, (state) => {
        state.statuses.fetchAllPrivateChat = status.PENDING;
        state.errors.fetchAllPrivateChat = null;
      })
      .addCase(fetchAllPrivateChatsThunk.fulfilled, (state, action) => {
        state.statuses.fetchAllPrivateChat = status.FULFILLED;
        state.privateChats = action.payload;
        state.errors.fetchAllPrivateChat = null;
      })
      .addCase(fetchAllPrivateChatsThunk.rejected, (state, action) => {
        state.statuses.fetchAllPrivateChat = status.REJECTED;
        state.errors.fetchAllPrivateChat = action.payload;
      });
    
    // Not used ==================================
    // fetch all messages
    // .addCase(fetchAllChatsThunk.pending, (state) => {
    //   state.statuses.fetchAll = status.PENDING;
    //   state.errors.fetchAll = null;
    // })
    // .addCase(fetchAllChatsThunk.fulfilled, (state, action) => {
    //   state.statuses.fetchAll = status.FULFILLED;
    //   state.messages = action.payload;
    //   state.errors.fetchAll = null;
    // })
    // .addCase(fetchAllChatsThunk.rejected, (state, action) => {
    //   state.statuses.fetchAll = status.REJECTED;
    //   state.errors.fetchAll = action.payload;
    // })

    // fetch message by Id
    // .addCase(fetchChatByIdThunk.pending, (state) => {
    //   state.statuses.fetchById = status.PENDING;
    //   state.errors.fetchById = null;
    // })
    // .addCase(fetchChatByIdThunk.fulfilled, (state, action) => {
    //   state.statuses.fetchById = status.FULFILLED;
    //   state.errors.fetchById = null;
    // })
    // .addCase(fetchChatByIdThunk.rejected, (state, action) => {
    //   state.statuses.fetchById = status.REJECTED;
    //   state.errors.fetchById = action.payload;
    // })

    // create message
    // .addCase(createChatThunk.pending, (state) => {
    //   state.statuses.create = status.PENDING;
    //   state.errors.create = null;
    // })
    // .addCase(createChatThunk.fulfilled, (state, action) => {
    //   state.statuses.create = status.FULFILLED;
    //   state.errors.create = null;
    // })
    // .addCase(createChatThunk.rejected, (state, action) => {
    //   state.statuses.create = status.REJECTED;
    //   state.errors.create = action.payload;
    // })

    // delete message
    // .addCase(deleteChatByIdThunk.pending, (state) => {
    //   state.statuses.delete = status.PENDING;
    //   state.errors.delete = null;
    // })
    // .addCase(deleteChatByIdThunk.fulfilled, (state, action) => {
    //   state.statuses.delete = status.FULFILLED;
    //   state.errors.delete = null;
    // })
    // .addCase(deleteChatByIdThunk.rejected, (state, action) => {
    //   state.statuses.delete = status.REJECTED;
    //   state.errors.delete = action.payload;
    // })

    // update message
    // .addCase(updateChatByIdThunk.pending, (state) => {
    //   state.statuses.update = status.PENDING;
    //   state.errors.delete = null;
    // })
    // .addCase(updateChatByIdThunk.fulfilled, (state, action) => {
    //   state.statuses.update = status.FULFILLED;
    //   state.errors.update = null;
    // })
    // .addCase(updateChatByIdThunk.rejected, (state, action) => {
    //   state.statuses.update = status.REJECTED;
    //   state.errors.update = action.payload;
    // })

    // change message
    // .addCase(changeChatByIdThunk.pending, (state) => {
    //   state.statuses.change = status.PENDING;
    //   state.errors.delete = null;
    // })
    // .addCase(changeChatByIdThunk.fulfilled, (state, action) => {
    //   state.statuses.change = status.FULFILLED;
    //   state.errors.change = null;
    // })
    // .addCase(changeChatByIdThunk.rejected, (state, action) => {
    //   state.statuses.change = status.REJECTED;
    //   state.errors.change = action.payload;
    // });
  },
});

export const chatReducer = chatSlice.reducer;
