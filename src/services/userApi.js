import axios from "axios";
import { BASE_URL } from "constants";

axios.defaults.baseURL = BASE_URL;


export const fetchAllUsersService = async () => {
  const { data } = await axios.get("/api/accounts/users/");

  return data;
};

export const updateUserService = async (credentials) => {
  const { data } = await axios.patch(
    "/api/accounts/users/update/",
    credentials
  );
  return data;
};

export const generateGravatarUserService = async (credentials) => {
  const { data } = await axios.get(
    "/api/accounts/users/generate-gravatar/",
    credentials
  );
  return data;
};

export const removeUserAvatarService = async (credentials) => {
  const { data } = await axios.delete(
    "/api/accounts/users/delete-profile-image/",
    credentials
  );
  return data;
};

export const fetchUserByUsername = async (username) => {
  const { data } = await axios.get(`/api/accounts/users/${username}/`);
  return data;
};
