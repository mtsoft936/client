
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { login, register } from "../api/auth.api";
import { loginData, registerData, accountInterface } from "../types";
import Cookies from "js-cookie";

interface authContextInterface {
  token: string | null,
  account: accountInterface | null,
  error: string,
  signup: (formData: registerData) => void,
  signin: (formData: loginData) => void,
  logout: () => void,
}

const initialValue = {
  token: null,
  account: {
    id: "",
    name: "",
    username: "",
    enabled: true,
    tenants: []
  },
  error: "",
  signup: () => { },
  signin: () => { },
  logout: () => { },
}

export const AuthContext = createContext<authContextInterface>(initialValue);

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [account, setAccount] = useState(Cookies.get("account") || null);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [error, setError] = useState("");

  const signup = async (formData: registerData) => {
    try {
      const result = await register(formData);
      setAccount(result.newUser);
      setToken(result.token);
    } catch (e) {
      setError((e as Error).message);
    }
  }

  const signin = async (formData: loginData) => {
    try {
      const result = await login(formData);
      setAccount(result.user);
      setToken(result.token);
    } catch (e) {
      setError((e as Error).message);
    }
  }

  const logout = () => {
    setAccount(null);
    setToken(null);
  };

  const getAccount = async () => {
    try {
      const {
        data: { data: accountData, token: accessToken },
      } = await axios.get("api/auth/getAccount", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setAccount(accountData);
      setToken(accessToken);
    } catch (error) {
      // if ((error as Error)?.response?.statusCode === 401) setToken(null);
    }
  };

  useEffect(() => {
    if (token) {
      Cookies.set("token", token);
      Cookies.set("account", JSON.stringify(account));
    } else {
      Cookies.remove("token");
      Cookies.remove("account");
    }
  }, [token, account]);

  useEffect(() => {
    if (!account && token)
      getAccount();
  }, [account, token]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AuthContext.Provider
      value={{
        account: JSON.parse(JSON.stringify(account)),
        token,
        error,
        signup,
        signin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
