import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  withCredentials: true,
});

export default axiosInstance;   // ✅ default export
export { axiosInstance };       // optional named export if you want both
