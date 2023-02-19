import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthGuard } from './AuthGuard';
import { PublicOnly } from './publicOnly';
const Dashboard = React.lazy(() => import('./../app/Dashboard/index'));
const Login = React.lazy(() => import('./../app/authentication/login'));

const AppRoute = () => {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<AuthGuard><Dashboard/></AuthGuard>} />
        <Route path="/login" element={<PublicOnly><Login/></PublicOnly>} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoute;
