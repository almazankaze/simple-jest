import axios from "axios";

const myUrl = "https://kitsu.io/api/edge";

const API = axios.create({ baseURL: myUrl });

export const fetchSearchedAnime = (limit, offset, searchTerm) =>
  API.get(
    `/anime?page[limit]=${limit}&page[offset]=${offset}&filter[text]=${searchTerm}`
  );
