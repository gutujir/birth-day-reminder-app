import apiClient from "./client";

export const getBirthdays = () => apiClient.get("/api/birthdays");
export const createBirthday = (data) => apiClient.post("/api/birthdays", data);
export const deleteBirthday = (id) => apiClient.delete(`/api/birthdays/${id}`);
export const getStatistics = () => apiClient.get("/api/birthdays/statistics");
export const getUpcomingBirthdays = () =>
  apiClient.get("/api/birthdays/upcoming");
