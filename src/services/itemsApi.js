import axios from "axios";
import { BASE_URL } from "constants";
axios.defaults.baseURL = `${BASE_URL}/accounts`;

// export const fetchUsers = async (token) => {
//   const { data } = await axios.get("/users", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return data;
// };

export const fetchUsers = async (token, username) => {
  const { data } = await axios.get(
    `https://buzz-talk-api.onrender.com/api/chat/?username=${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
