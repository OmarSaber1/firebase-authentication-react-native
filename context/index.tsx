import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  setAuthentication: (token: string) => {},
  logOut: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    async function getTokenFromStorage() {
      setToken(await AsyncStorage.getItem("token"));
    }

    getTokenFromStorage();
  }, []);

  function setAuthentication(token: string) {
    setToken(token);
  }

  function logOut() {
    setToken(null);
    AsyncStorage.removeItem("token");
  }
  const value = useMemo(
    () => ({
      setAuthentication,
      logOut,
      token,
      isAuthenticated: !!token,
    }),
    [setAuthentication, logOut, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
