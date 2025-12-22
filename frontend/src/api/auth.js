import apiClient from "./client";

export const signup = (data) => apiClient.post("/api/auth/signup", data);
export const login = (data) => apiClient.post("/api/auth/login", data);
export const logout = () => apiClient.post("/api/auth/logout");
export const checkAuth = () => apiClient.get("/api/auth/check-auth");
export const verifyEmail = (payload) =>
  apiClient.post("/api/auth/verify-email", payload);
export const resendVerification = (payload) =>
  apiClient.post("/api/auth/resend-verification", payload);
export const forgotPassword = (payload) =>
  apiClient.post("/api/auth/forgot-password", payload);
export const resetPassword = (payload) =>
  apiClient.post("/api/auth/reset-password-by-code", payload);
