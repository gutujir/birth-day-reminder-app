import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { checkAuth, login as loginApi, signup as signupApi, logout as logoutApi } from "../api/auth";

const AuthContext = createContext({
  user: null,
  isLoading: false,
  setUser: () => {},
  login: async () => {},
  signup: async () => {},
  logout: async () => {},
  refresh: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await checkAuth();
      setUser(data?.user || null);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const login = async (payload) => {
    await loginApi(payload);
    await refresh();
  };

  const signup = async (payload) => {
    await signupApi(payload);
    await refresh();
  };

  const logout = async () => {
    await logoutApi();
    setUser(null);
  };

  const value = { user, isLoading, setUser, login, signup, logout, refresh };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
