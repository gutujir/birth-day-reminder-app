import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    const message = error?.response?.data?.message || error.message;
    return Promise.reject(new Error(message));
  }
);

export default apiClient;
