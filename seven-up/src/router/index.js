import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { PublicOnly } from "./publicOnly";
const Dashboard = React.lazy(() => import("./../app/Dashboard/index"));
const Login = React.lazy(() => import("./../app/authentication/login"));
const Logout = React.lazy(() => import("./../app/authentication/logout"));
const Singup = React.lazy(() => import("../app/authentication/Singup"));

const Home = React.lazy(() => import("../component/home/Home"));
const Tips = React.lazy(() => import("../component/tips/Tips"));

const AppRoute = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
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
