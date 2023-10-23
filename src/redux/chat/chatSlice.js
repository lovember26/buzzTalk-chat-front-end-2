import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./chatState";
import {
  fetchAllMessagesThunk,
  fetchMessageByIdThunk,
  createMessageThunk,
  deleteMessageByIdThunk,
  updateMessageThunk,
  changeMessageThunk,
} from "./chatThunk";
import { status } from "constants";

//Finish the functionality chatSlice
export const chatSlice = createSlice({
  name: "chat",
  initialState,
  extraReducers: (builder) => {
    builder
      // fetch all messages
      .addCase(fetchAllMessagesThunk.pending, (state) => {
        state.statuses.fetchAll = status.PENDING;
        state.errors.fetchAll = null;
      })
      .addCase(fetchAllMessagesThunk.fulfilled, (state, action) => {
        state.statuses.fetchAll = status.FULFILLED;
        state.messages = action.payload;
        state.errors.fetchAll = null;
      })
      .addCase(fetchAllMessagesThunk.rejected, (state, action) => {
        state.statuses.fetchAll = status.REJECTED;
        state.errors.fetchAll = action.payload;
      })

      // fetch message by Id
      .addCase(fetchMessageByIdThunk.pending, (state) => {
        state.statuses.fetchById = status.PENDING;
        state.errors.fetchById = null;
      })
      .addCase(fetchMessageByIdThunk.fulfilled, (state, action) => {
        state.statuses.fetchById = status.FULFILLED;
        state.errors.fetchById = null;
      })
      .addCase(fetchMessageByIdThunk.rejected, (state, action) => {
        state.statuses.fetchById = status.REJECTED;
        state.errors.fetchById = action.payload;
      })

      // create message
      .addCase(createMessageThunk.pending, (state) => {
        state.statuses.create = status.PENDING;
        state.errors.create = null;
      })
      .addCase(createMessageThunk.fulfilled, (state, action) => {
        state.statuses.create = status.FULFILLED;
        state.errors.create = null;
      })
      .addCase(createMessageThunk.rejected, (state, action) => {
        state.statuses.create = status.REJECTED;
        state.errors.create = action.payload;
      })

      // delete message
      .addCase(deleteMessageByIdThunk.pending, (state) => {
        state.statuses.delete = status.PENDING;
        state.errors.delete = null;
      })
      .addCase(deleteMessageByIdThunk.fulfilled, (state, action) => {
        state.statuses.delete = status.FULFILLED;
        state.errors.delete = null;
      })
      .addCase(deleteMessageByIdThunk.rejected, (state, action) => {
        state.statuses.delete = status.REJECTED;
        state.errors.delete = action.payload;
      })

      // update message
      .addCase(updateMessageThunk.pending, (state) => {
        state.statuses.update = status.PENDING;
        state.errors.delete = null;
      })
      .addCase(updateMessageThunk.fulfilled, (state, action) => {
        state.statuses.update = status.FULFILLED;
        state.errors.update = null;
      })
      .addCase(updateMessageThunk.rejected, (state, action) => {
        state.statuses.update = status.REJECTED;
        state.errors.update = action.payload;
      })

      // change message
      .addCase(changeMessageThunk.pending, (state) => {
        state.statuses.change = status.PENDING;
        state.errors.delete = null;
      })
      .addCase(changeMessageThunk.fulfilled, (state, action) => {
        state.statuses.change = status.FULFILLED;
        state.errors.change = null;
      })
      .addCase(changeMessageThunk.rejected, (state, action) => {
        state.statuses.change = status.REJECTED;
        state.errors.change = action.payload;
      });
  },
});

export const chatReducer = chatSlice.reducer;
