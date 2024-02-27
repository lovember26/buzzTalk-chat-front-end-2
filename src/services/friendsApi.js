import axios from "axios";
import { BASE_URL } from "constants";
// import { selectAccessToken } from "redux/auth/authSelectors";

axios.defaults.baseURL = BASE_URL;



export const addFriend = async ( username) => {
    const { data } = await axios.post(
      `/chat/friends/add-request/`,
      {
        username,
        // headers: {
        //   Authorization: `Bearer ${selectAccessToken}`,
        // },
      }
    );
   
    return data;}

    
export const removeFriend = async ( username) => {
  const { data } = await axios.delete(
    `/chat/friends/${username}`,
  );
 
  return data;}

    

    export const getIncomingRequests= async () => {
      const { data } = await axios.post(
        `/chat/friends/incoming-requests/`,
        
      );
      return data;}
  

      
    export const fetchFriends= async () => {
      const { data } = await axios.get(
        `/chat/friends`,
        
      );
      return data;}