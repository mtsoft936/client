
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { login, register } from "../api/auth.api";
import { loginData, registerData, accountInterface } from "../types";
import Cookies from "js-cookie";

interface authContextInterface {
  token: string | null,
  account: string | null,
  error: string,
  signup: (formData: registerData) => void,
  signin: (formData: loginData) => void,
  logout: () => void,
}

const initialValue = {
  token: null,
  account: null,
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

  const [alertshow, Setalertshow] = useState(false);
  const [alertcontent, Setalertcontent] = useState("");

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
      console.log(result);
      if (result.token) {
        setAccount(JSON.stringify(result.user));
        setToken(result.token);
        Setalertshow(false);
      }
      else {
        Setalertcontent("Your email or password is incorrect!");
        Setalertshow(true);
      }
    } catch (e) {
      setError((e as Error).message);
    }
  }

  const logout = () => {
    setAccount(null);
    setToken(null);
  };

  function checkCookieExpiration() {
    const myCookieValue = Cookies.get('token');
    if (typeof myCookieValue === 'undefined') {
      logout();
    }
  }

  const Alert = () => {
    return (
      <div role="alert" className="w-[50%] mx-auto mt-10 absolute ml-[25%] ">
        <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 flex justify-between">
          <div>{alertcontent}</div>
          <button onClick={() =>{Setalertshow(false)}}>
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
          </button>
        </div>

      </div>
    )
  }

  setInterval(checkCookieExpiration, 60000);

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
      Cookies.set("token", token, { expires: 0.04 });
    } else {
      Cookies.remove("token");
    }

    if (account) {
      Cookies.set("account", account, { expires: 0.04 });
    } else {
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
        account: account,
        token,
        error,
        signup,
        signin,
        logout,
      }}
    >
      {alertshow&&<Alert />}
      {children}
    </AuthContext.Provider>
  );
}
