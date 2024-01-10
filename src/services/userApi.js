import axios from "axios";

// axios.defaults.baseURL = "https://buzz-talk-api.onrender.com";
axios.defaults.baseURL = "http://127.0.0.1:8000";

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
