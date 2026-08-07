import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://shopnest-backend-d3e5.onrender.com/api",
});

export default axiosInstance;