import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../app/authentication/login";
import { AuthGuard } from './AuthGuard';
const Dashboard = React.lazy(() => import('./../app/Dashboard/index'));

const AppRoute = () => {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<AuthGuard><Dashboard/></AuthGuard>} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoute;
