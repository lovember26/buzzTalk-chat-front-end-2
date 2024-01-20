import axios from "axios";
import { BASE_URL } from "constants";
axios.defaults.baseURL = `${BASE_URL}/api/accounts`;

// export const fetchUsers = async (token) => {
// const { data } = await axios.get("/users", {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });
// return data;
// };

export const fetchUsers = async (token, username) => {
  const { data } = await axios.get(
    `https://buzz-talk-api.onrender.com/chat/?username=${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // const { data } = await axios.get(
  //   `http://127.0.0.1:8000/chat/?username=${username}`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  // );
  return data;
};
