import { status } from "constants";

export const initialState = {
  id: null,
  username: null,
  email: null,
  first_name: null,
  last_name: null,
  isLoggedIn: false,

  statuses: {
    current: status.IDLE,
  },

  errors: {
    current: null,
  },
};
