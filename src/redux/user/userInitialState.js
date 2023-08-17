import { status } from "constants";

export const initialState = {
  id: null,
  username: null,
  email: null,
  // first_name: null,
  // last_name: null,
  image: "null",
  description: null,
  // isLoggedIn: false,

  statuses: {
    current: status.IDLE,
    update: status.IDLE,
    generateGravatar: status.IDLE,
  },

  errors: {
    current: null,
    update: null,
    generateGravatar: null,
  },
};
