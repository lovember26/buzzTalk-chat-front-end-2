import { status } from "constants";

export const initialState = {
  all: [],

  statuses: {
    fetchAll: status.IDLE,
    fetchById: status.IDLE,
    create: status.IDLE,
    delete: status.IDLE,
    update: status.IDLE,
    change: status.IDLE,
  },

  errors: {
    fetchAll: null,
    fetchById: null,
    create: null,
    delete: null,
    update: null,
    change: null,
  },
};
