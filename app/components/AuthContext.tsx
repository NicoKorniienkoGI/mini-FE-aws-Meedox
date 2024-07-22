"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { check } from "../actions";

interface AuthContextProps {
  user: { username: string; token: string } | null;
  setUser: (user: { username: string; token: string } | null) => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ username: string; token: string } | null>(
    null
  );

  useEffect(() => {
    const fetchUser = async () => {
      const res = await check();
      setUser(res.user);
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
