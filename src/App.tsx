import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {

  return (
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
  );
};

export default App;