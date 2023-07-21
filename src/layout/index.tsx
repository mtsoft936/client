import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { useAuth } from "../contexts/AuthContext";
import { getMenu } from "../api/menu.api";

export default function Layout() {
  const { token, account } = useAuth();
  const [menuData, SetmenuData] = useState();

  useEffect(() => {
    if(token && account) {
      const getMenuData = async () => {
        console.log(typeof account);
        
        const result = await getMenu({token, tenantId: JSON.parse(account)?.tenants[0]?.id })
        console.log(result);
        return result;
      }
      getMenuData();
    }
  }, [])



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
