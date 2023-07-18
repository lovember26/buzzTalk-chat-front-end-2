import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export const fetchItems = async () => {
  const { data } = await axios.get("/posts");
  return data;
};

export const deleteItem = async (id) => {
  const { data } = await axios.delete(`/posts/${id}`);
  return data;
};
