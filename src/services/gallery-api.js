import axios from "axios";

const KEY = "19009263-30a6a89df12a665822c0a250f";
const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=`;

export const getImage = (query = "", page =1) =>
  axios.get(`${BASE_URL}+${query}&page=${page}&per_page=12&key=${KEY}`);
