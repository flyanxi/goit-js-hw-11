import axios from "axios";

const API_KEY = "56871072-b6eb6073cb28c17f40b270284";

axios.defaults.baseURL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  return axios.get("", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  }).then(response => response.data);
}