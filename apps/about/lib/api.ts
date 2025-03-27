import axios from "axios";

const api = axios.create({
  baseURL: "https://api.kingzai.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
