import axios from "axios";

const api = axios.create({
  //baseURL: "http://localhost:7000/episodeapi",
  baseURL: "https://api.homescreen.space/episodeapi",
});

export const insertEpisode = (payload) => api.post(`/episode`, payload);
export const getAllEpisodes = (id) =>
  api.get(`/getepisode`, { params: { id: id } });
export const updateEpisode = (id, payload) =>
  api.put(`/updateepisode/${id}`, payload);
export const deleteEpisode = (id) => api.delete(`/deleteepisode/${id}`);

const apis = {
  insertEpisode,
  getAllEpisodes,
  updateEpisode,
  deleteEpisode,
};

export default apis;
