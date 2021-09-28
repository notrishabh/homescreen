import axios from "axios";

const api = axios.create({
  baseURL: "https://api.homescreen.space/googlelogin",
});

export const login = (payload) => api.post(`/glogin`, payload);

const apis = {
  login,
};

export default apis;
