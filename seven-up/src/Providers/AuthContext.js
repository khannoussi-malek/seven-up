import { createContext, useCallback, useContext, useState } from "react";
import { LOCALSTORAGE_TOKEN_KEY } from "../constants/authConst";

const AuthContext = createContext();

const updateToken = token => {
  if (typeof window === "undefined") {
    return () => undefined;
  }
  if (token) {
    localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token);
  } else {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
  }
};

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(
        (typeof window !== "undefined" && localStorage.getItem(LOCALSTORAGE_TOKEN_KEY)) ?? null
      );

      const handleTokenUpdate = useCallback(
        (newToken) => {
          setToken(newToken);
          updateToken(newToken);
        },
        [setToken]
      );
      return (
        <AuthContext.Provider
          value={{
            isConnected: !!token,
            updateToken: handleTokenUpdate,
          }}
        >
          {children}
        </AuthContext.Provider>
      );
}