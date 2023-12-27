import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./chatState";
import {
  fetchAllPrivateChatsThunk,
  fetchAllPublicChatsThunk,
  getChatBySlugThunk,
  createPrivateChatThunk,
  createPublicChatThunk,
  replyMessageThunk,
  // fetchAllChatsThunk,
  // fetchChatByIdThunk,
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
      // fetch all private chats
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
      })

      // fetch all public chats
      .addCase(fetchAllPublicChatsThunk.pending, (state) => {
        state.statuses.fetchAllPublicChat = status.PENDING;
        state.errors.fetchAllPublicChat = null;
      })
      .addCase(fetchAllPublicChatsThunk.fulfilled, (state, action) => {
        state.statuses.fetchAllPublicChat = status.FULFILLED;
        state.publicChats = action.payload;
        state.errors.fetchAllPublicChat = null;
      })
      .addCase(fetchAllPublicChatsThunk.rejected, (state, action) => {
        state.statuses.fetchAllPublicChat = status.REJECTED;
        state.errors.fetchAllPublicChat = action.payload;
      })

      // fetch chats by slug
      .addCase(getChatBySlugThunk.pending, (state) => {
        state.statuses.fetchChatBySlug = status.PENDING;
        state.errors.fetchChatBySlug = null;
      })
      .addCase(getChatBySlugThunk.fulfilled, (state, action) => {
        state.statuses.fetchChatBySlug = status.FULFILLED;
        state.errors.fetchChatBySlug = null;
      })
      .addCase(getChatBySlugThunk.rejected, (state, action) => {
        state.statuses.fetchChatBySlug = status.REJECTED;
        state.errors.fetchChatBySlug = action.payload;
      })

      // create private chat
      .addCase(createPrivateChatThunk.pending, (state) => {
        state.statuses.createPrivateChat = status.PENDING;
        state.errors.createPrivateChat = null;
      })
      .addCase(createPrivateChatThunk.fulfilled, (state, action) => {
        state.statuses.createPrivateChat = status.FULFILLED;
        state.errors.createPrivateChat = null;
      })
      .addCase(createPrivateChatThunk.rejected, (state, action) => {
        state.statuses.createPrivateChat = status.REJECTED;
        state.errors.createPrivateChat = action.payload;
      })

      // create public chat
      .addCase(createPublicChatThunk.pending, (state) => {
        state.statuses.createPublicChat = status.PENDING;
        state.errors.createPublicChat = null;
      })
      .addCase(createPublicChatThunk.fulfilled, (state, action) => {
        state.statuses.createPublicChat = status.FULFILLED;
        state.errors.createPublicChat = null;
      })
      .addCase(createPublicChatThunk.rejected, (state, action) => {
        state.statuses.createPublicChat = status.REJECTED;
        state.errors.createPublicChat = action.payload;
      })

      // reply message
      .addCase(replyMessageThunk.pending, (state) => {
        state.statuses.replyMessage = status.PENDING;
        state.errors.replyMessage = null;
      })
      .addCase(replyMessageThunk.fulfilled, (state, action) => {
        state.statuses.replyMessage = status.FULFILLED;
        state.publicChats = action.payload;
        state.errors.replyMessage = null;
      })
      .addCase(replyMessageThunk.rejected, (state, action) => {
        state.statuses.replyMessage = status.REJECTED;
        state.errors.replyMessage = action.payload;
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
