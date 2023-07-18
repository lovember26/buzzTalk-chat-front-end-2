import axios from "axios";
axios.defaults.baseURL =
  "http://buzz-talk-api.eu-west-3.elasticbeanstalk.com/api/accounts";

export const registerUserService = async (credentials) => {
  const { data } = await axios.post("/register/", credentials);
  return data;
};

export const loginUserService = async (credentials) => {
  const { data } = await axios.post("/token/", credentials);
  console.log("data token loginUserService", data);
  return data;
};
