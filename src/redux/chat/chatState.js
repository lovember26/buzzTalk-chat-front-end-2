import { status } from "constants";

export const initialState = {
  privateChats: null,
  publicChats: null,
  replyMessage: null,

  statuses: {
    fetchAllPrivateChat: status.IDLE,
    fetchByIdPrivateChat: status.IDLE,
    createPrivateChat: status.IDLE,
    deletePrivateChat: status.IDLE,
    updatePrivateChat: status.IDLE,
    changePrivateChat: status.IDLE,

    fetchAllPublicChat: status.IDLE,
    fetchByIdPublicChat: status.IDLE,
    createPublicChat: status.IDLE,
    deletePublicChat: status.IDLE,
    updatePublicChat: status.IDLE,
    changePublicChat: status.IDLE,

    replyMessage: status.IDLE,
  },

  errors: {
    fetchAllPrivateChat: null,
    fetchByIdPrivateChat: null,
    createPrivateChat: null,
    deletePrivateChat: null,
    updatePrivateChat: null,
    changePrivateChat: null,

    fetchAllPublicChat: null,
    fetchByIdPublicChat: null,
    createPublicChat: null,
    deletePublicChat: null,
    updatePublicChat: null,
    changePublicChat: null,

    replyMessage: null,
  },
};
