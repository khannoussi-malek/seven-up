import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { PublicOnly } from "./publicOnly";
import Dashboard from "./../app/Dashboard/index"
import Login from "./../app/authentication/login"
import Logout from "../app/authentication/logout"
import Singup from "./../app/authentication/Singup"
import Home from "./../component/home/Home"
import Tips from "../component/tips/Tips"


const AppRoute = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />
        <Route
          path="/login"
          element={
            <PublicOnly>
              <Login />
            </PublicOnly>
          }
        />
        <Route
          path="/logout"
          element={
            <PublicOnly>
              <Logout />
            </PublicOnly>
          }
        />
        <Route
          path="/Register"
          element={
            <PublicOnly>
              <Singup />
            </PublicOnly>
          }
        />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoute;
