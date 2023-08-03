import axios from "axios";

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
  const { data } = await axios.post("/reset-password-token/", credentials);
  console.log(data);
  return data;
};

export const resetPassword = async (credentials) => {
  const { data } = await axios.post("/reset-password/", credentials);
  console.log(data);
  return data;
};
