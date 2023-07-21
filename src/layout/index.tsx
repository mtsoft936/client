import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { useAuth } from "../contexts/AuthContext";

export default function Layout() {
  const { token } = useAuth();

  return (
    <>
      {
        token ?
          <div className="flex flex-row p-5 min-h-screen">
            <Menu />
            <div className="grow p-5">
              <div>
                <Header />
              </div>
              <div>
                <Outlet />
              </div>
            </div>
          </div>
          :
          <Navigate to="/signin" />
      }
    </>

  );
}
