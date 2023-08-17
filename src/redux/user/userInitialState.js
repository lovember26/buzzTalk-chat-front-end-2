import { status } from "constants";

export const initialState = {
  id: null,
  username: null,
  email: null,
  image: "null",
  description: null,

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
