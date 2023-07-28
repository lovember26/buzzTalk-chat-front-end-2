import { status } from "constants";

export const initialState = {
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,

  statuses: {
    register: status.IDLE,
    login: status.IDLE,
    logout: status.IDLE,
  },

  errors: {
    register: null,
    login: null,
    logout: null,
  },
};
