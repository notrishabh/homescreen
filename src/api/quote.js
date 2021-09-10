import axios from "axios";

const api = axios.create({
  baseURL: "https://api.quotable.io/",
});

export const randomQuote = () => api.get(`/random`);
export const searchRandomQuote = (tag) => api.get(`/random?tags=${tag}`);
export const getAllTags = () => api.get(`/tags`);

const apis = {
  randomQuote,
  searchRandomQuote,
  getAllTags,
};

export default apis;
