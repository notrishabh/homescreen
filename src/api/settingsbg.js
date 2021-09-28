import axios from "axios";

const api = axios.create({
  baseURL: "https://api.homescreen.space/settingsbg",
});

export const getBGurl = (id) =>
  api.get(`/getsettingbg`, { params: { id: id } });
export const updateBG = (payload) => api.put(`/updatesettingsbg`, payload);

const apis = {
  getBGurl,
  updateBG,
};

export default apis;
