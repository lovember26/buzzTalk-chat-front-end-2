import axios from "axios";

axios.defaults.baseURL = "https://buzz-talk-api.onrender.com/api/accounts";

export const updateUserService = async (credentials) => {
  const { data } = await axios.patch("/users/update/", credentials);
  return data;
};

export const generateGravatarUserService = async (credentials) => {
  const { data } = await axios.get("/users/generate-gravatar/", credentials);
  return data;
};
