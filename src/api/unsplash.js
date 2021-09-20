import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com/",
});

const clientId = process.env.REACT_APP_UNSPLASH_CLIENTID;

export const randomImage = () =>
  api.get(`/photos/random?client_id=${clientId}`);
export const searchImage = (query) =>
  api.get(`/search/photos?client_id=${clientId}&query=${query}`);

const apis = {
  randomImage,
  searchImage,
};

export default apis;
