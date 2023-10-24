import axios from "axios";

axios.defaults.baseURL = "https://buzz-talk-api.onrender.com/api";

// Parameters -
// Response - array with objects id participants and messages values
export const getMessagesService = async () => {
  const { data } = await axios.get("/chat/");
  console.log("getMessagesService data", data);
  return data;
};

// Parameters - object with participants and messages values
// Response - object with id participants and messages values
export const createMessagesService = async (participants, messages) => {
  const { data } = await axios.post("/chat/create/", {
    participants,
    messages,
  });
  return data;
};

// Parameters - id
// Response - object with id participants and messages values
export const getChatByIdService = async (id) => {
  const { data } = await axios.get(`/chat/${id}`);
  console.log("getChatByIdService", data);
  return data;
};

// Parameters - id
// Response - code 204
export const deleteChatByIdService = async (id) => {
  const { data } = await axios.delete(`/chat/${id}/`);
  return data;
};

// Parameters -  object with participants and messages values and id
// Response - object with id participants and messages values
export const updateMessageService = async (object, id) => {
  const { data } = await axios.put(`/chat/${id}/update/`);
  return data;
};

// Parameters -  object with participants and messages values and id
// Response - object with id participants and messages values
export const changeMessageService = async (object, id) => {
  const { data } = await axios.patch(`/chat/${id}/update/`);
  return data;
};
