import axios from "axios";

axios.defaults.baseURL = "https://buzz-talk-api.onrender.com/api";

export const registerUserService = async (credentials) => {
  const { data } = await axios.post("/accounts/register/", credentials);
  return data;
};

export const loginUserService = async (credentials) => {
  const { data } = await axios.post("/accounts/token/", credentials);
  return data;
};

export const currentUserService = async (accessToken) => {
  const { data } = await axios.get("/accounts/me/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const verifyUserService = async (credentials) => {
  const { data } = await axios.post("/accounts/activate/", credentials);
  return data;
};

export const resetPasswordToken = async (credentials) => {
  const { data } = await axios.post(
    "/accounts/reset-password-token/",
    credentials
  );
  return data;
};

export const resetPassword = async (credentials) => {
  const { data } = await axios.post("/accounts/reset-password/", credentials);
  return data;
};

export const resendEmail = async (credentials) => {
  const { data } = await axios.post(
    "accounts/refresh-activation-token/",
    credentials
  );
  return data;
};
