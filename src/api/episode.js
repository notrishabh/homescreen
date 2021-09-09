import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7000/episodeapi",
});

export const insertEpisode = (payload) => api.post(`/episode`, payload);
export const getAllEpisodes = () => api.get(`/getepisode`);
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
