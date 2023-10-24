import { status } from "constants";

export const initialState = {
  all: [],

  id: null,
  username: null,
  email: null,
  image: "null",
  description: null,
  // When reload page and request to server for user info
  isFetchingCurrentUser: false,

  statuses: {
    fetchAll: status.IDLE,
    current: status.IDLE,
    update: status.IDLE,
    generateGravatar: status.IDLE,
    removeAvatar: status.IDLE,
  },

  errors: {
    fetchAll: null,
    current: null,
    update: null,
    generateGravatar: null,
    removeAvatar: null,
  },
};
