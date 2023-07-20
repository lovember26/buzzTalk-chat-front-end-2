import { status } from "constants";

export const initialState = {
  user: {
    username: "",
    password: "",
    confirm_password: "",
    email: "",
    first_name: "",
    last_name: "",
  },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  status: status.IDLE,
  error: null,
};

// export const initialState = {
//   user: {
//     username: "",
//     password: "",
//     confirm_password: "",
//     email: "",
//     first_name: "",
//     last_name: "",
//   },
//   accessToken: null,
//   refreshToken: null,
//   isLoggedIn: false,
//   status: {
//     register: status.IDLE,
//     login: status.IDLE,
//     logout: status.IDLE,
//   },
//   error: {
//     register: null,
//     login: null,
//     logout: null,
//   },
// };
