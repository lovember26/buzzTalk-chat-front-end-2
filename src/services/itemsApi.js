import axios from "axios";
import { BASE_URL } from "constants";
axios.defaults.baseURL = `${BASE_URL}/accounts`;

export const fetchUsers = async (token) => {
  const { data } = await axios.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteItem = async (id) => {
  // const { data } = await axios.delete(`/posts/${id}`);
  // return data;
};
