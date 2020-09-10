import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.themealdb.com",
});

export default instance