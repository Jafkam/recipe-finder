import axios from "axios";

const instance = axios.create({
  baseURL: "https://recipe-finder-69821.firebaseio.com",
});

export default instance