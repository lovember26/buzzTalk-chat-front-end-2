import axios from "axios";

axios.defaults.baseURL = "https://buzz-talk-api.onrender.com";
// axios.defaults.baseURL = "http://127.0.0.1:8000";

export const getPrivateChatsService = async () => {
  const { data } = await axios.get("/chat/private-chat/");
  return data;
};

export const getPublicChatsService = async () => {
  const { data } = await axios.get("/chat/public-chat/");
  return data;
};

// export const getPublicChatsService = async (username) => {
//   console.log("getPublicChatsService", username);
//   const { data } = await axios.get(
//     `/chat/public-chat/?username=${username}&page=1`
//   );
//   return data;
// };

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

export const getChatBySlugService = async (slug) => {
  const { data } = await axios.get(`chat/detail/?slug=${slug}&page=1`);
  return data;
};

export const updatePublicChatService = async (credentials) => {
  const { data } = await axios.patch(
    "/chat/public-chat/update-inform/",
    credentials
  );
  return data;
};

export const generatePublicChatGravatarService = async (id) => {
  const { data } = await axios.put("/chat/public-chat/generate-gravatar/", id);
  return data;
};

export const removePublicChatImageService = async (id) => {
  const { data } = await axios.delete("/chat/public-chat/delete-image/", id);
  return data;
};

// Not Used =======================================================
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
