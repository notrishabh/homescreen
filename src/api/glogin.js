import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7000/googlelogin",
});

export const login = (payload) => api.post(`/glogin`, payload);

const apis = {
  login,
};

export default apis;
