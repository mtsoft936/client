import React from "react";
import Layout from "../layout";
import Content from "../components/Content/Home";
import { Navigate, RouteObject } from "react-router-dom";
import SignIn from "../pages/SignIn";

const pagesData:RouteObject[] = [
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "home",
        element: <Content/>
      },
      {
        path: "*",
        element: <Navigate to="/"/>
      },
    ]
  },
  {
    path: "/signin",
    element: <SignIn/>
  }
];

export default pagesData;
