import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export async function fetchItems() {
  const { data } = await axios.get("/albums");
  return data;
}
