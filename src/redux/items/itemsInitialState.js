import { status } from "constants";

export const initialState = {
  entities: [],
  statuses: {
    get: status.IDLE,
    add: status.IDLE,
    remove: status.IDLE,
  },
  errors: {
    get: null,
    add: null,
    remove: null,
  },
};
