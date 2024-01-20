import axios from "axios";

axios.defaults.baseURL = "https://buzz-talk-api.onrender.com";
// axios.defaults.baseURL = "http://127.0.0.1:8000";

export const registerUserService = async (credentials) => {
  const { data } = await axios.post("/api/accounts/register/", credentials);
  return data;
};

export const loginUserService = async (credentials) => {
  const { data } = await axios.post("/api/accounts/token/", credentials);
  return data;
};

export const currentUserService = async (accessToken) => {
  const { data } = await axios.get("/api/accounts/me/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const verifyUserService = async (credentials) => {
  const { data } = await axios.post("/api/accounts/activate/", credentials);
  return data;
};

export const resetPasswordToken = async (credentials) => {
  const { data } = await axios.post(
    "/api/accounts/reset-password-token/",
    credentials
  );
  return data;
};

export const resetPassword = async (credentials) => {
  const { data } = await axios.post(
    "/api/accounts/reset-password/",
    credentials
  );
  return data;
};

export const resendEmail = async (credentials) => {
  const { data } = await axios.post(
    "/api/accounts/refresh-activation-token/",
    credentials
  );
  return data;
};
