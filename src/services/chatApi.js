import axios from "axios";

axios.defaults.baseURL = "https://buzz-talk-api.onrender.com";

// Parameters -
// Response - array with objects id participants and messages values
export const getPrivateChatsService = async () => {
  const { data } = await axios.get("/chat/private-chat/");
  return data;
};

export const getPublicChatsService = async () => {
  const { data } = await axios.get("/chat/public-chat/");
  return data;
};

export const createPrivateChatService = async (receiver) => {
  const { data } = await axios.post("/chat/private-chat/", {
    receiver,
  });
  return data;
};

export const createPublicChatService = async (object) => {
  const { data } = await axios.post("/chat/public-chat/", object);
  return data;
};

export const replyMessageService = async (object) => {
  const { data } = await axios.post("/chat/reply/", object);
  return data;
};

// Not Used =======================================================
// Parameters -
// Response - array with objects id participants and messages values
export const getAllChatsService = async () => {
  const { data } = await axios.get("/chat/");
  console.log("getMessagesService data", data);
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
export const updateChatByIdService = async (object, id) => {
  const { data } = await axios.put(`/chat/${id}/update/`);
  return data;
};

// Parameters -  object with participants and messages values and id
// Response - object with id participants and messages values
export const changeChatByIdService = async (object, id) => {
  const { data } = await axios.patch(`/chat/${id}/update/`);
  return data;
};
