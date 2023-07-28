import axios from "axios";
import { successNotification, errorNotification } from "helpers/notification";
axios.defaults.baseURL =
  "http://buzz-talk-api.eu-west-3.elasticbeanstalk.com/api/accounts";

export const registerUserService = async (credentials) => {
  const { data } = await axios.post("/register/", credentials);
  return data;
};

export const loginUserService = async (credentials) => {
  const { data } = await axios.post("/token/", credentials);
  return data;
};

export const currentUserService = async (accessToken) => {
  const { data } = await axios.get("/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const verifyUserService = async (credentials) => {
  const { data } = await axios.post("/activate/", credentials);
  return data;
};

export const resetPasswordToken = async (credentials) => {
  try {
    const { data } = await axios.post("/reset-password-token/", credentials);
    console.log("hello");
    successNotification("Check your email to reset password!");
    return data;
  } catch (error) {
    console.log(error.message);
    errorNotification("Try again!");
  }
};

export const resetPassword = async (credentials) => {
  try {
    console.log(credentials);
    const { data } = await axios.post("/reset-password/", credentials);

    successNotification("You changed your password");
    return data;
  } catch (error) {
    console.log(error.message);
    errorNotification("Try again!");
  }
};
