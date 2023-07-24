import React, { useEffect, useState } from "react";

import Logo from "../assets/images/logo.jpg";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin, token } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token])

  const handleClick = async () => {
    await signin({ username: email, password, scope: "string" })
  };

  return (
    <div>
      <div className="grid lg:grid-cols-3 p-5 min-h-screen">
        <div className="content-center items-center lg:col-span-1 mt-5 mb-5">
          <div className="ml-[15%] mr-[15%] mt-[5%]">
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className="mt-[15%]">
              <div className="text-2xl font-semibold">Sign in to Minimal</div>
              <div className="mt-5">
                New user?{" "}
                <a className="text-teal-400" href="/coming">
                  Create an account
                </a>
              </div>
            </div>
            <div className="content-center mt-10">
              <input
                type="email"
                id="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="bg-gray-50 border w-full mt-5 mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email address"
              />
              <input
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="bg-gray-50 border mt-5 mb-5 w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
              />
            </div>
            <div className="">
              <a href="/coming" className="underline float-right mb-5">
                Forgot password?
              </a>
            </div>
            <div className="">
              <button
                className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4  w-full border-white-700 rounded"
                onClick={handleClick}
              >
                <span className="float-left">Login</span>
                <span className="float-right">{">"}</span>
              </button>
            </div>
          </div>
        </div>
        <div className="content-center items-center lg:col-span-2 login-bg bg-cover bg-center">
          {/* <img className="w-full h-full" src={Image1} alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default SignIn;