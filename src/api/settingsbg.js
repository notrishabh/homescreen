import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7000/settingsbg",
});

export const getBGurl = (id) =>
  api.get(`/getsettingbg`, { params: { id: id } });
export const updateBG = (payload) => api.put(`/updatesettingsbg`, payload);

const apis = {
  getBGurl,
  updateBG,
};

export default apis;
