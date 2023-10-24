import axios from "axios";

axios.defaults.baseURL = "https://buzz-talk-api.onrender.com/api";

export const fetchAllUsersService = async () => {
  const { data } = await axios.get("/accounts/users/");
  return data;
};

export const updateUserService = async (credentials) => {
  const { data } = await axios.patch("/accounts/users/update/", credentials);
  return data;
};

export const generateGravatarUserService = async (credentials) => {
  const { data } = await axios.get(
    "/accounts/users/generate-gravatar/",
    credentials
  );
  return data;
};

export const removeUserAvatarService = async (credentials) => {
  const { data } = await axios.delete(
    "/accounts/users/delete-profile-image/",
    credentials
  );
  return data;
};
