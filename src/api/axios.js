import axios from "axios";

const api = axios.create({
  baseURL: "https://joven-safaris-backend-92tp.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;