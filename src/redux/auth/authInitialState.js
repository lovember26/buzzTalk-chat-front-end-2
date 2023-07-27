import { status } from "constants";

export const initialState = {
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  status: status.IDLE,
  error: null,
};
