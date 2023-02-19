import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../app/authentication/login";
import { AuthGuard } from './AuthGuard';
const Dashboard = React.lazy(() => import('./../app/Dashboard/index'));

const Home = React.lazy(() => import('../component/home/Home'));
const Tips = React.lazy(() => import('../component/tips/Tips'));

const AppRoute = () => {

  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<AuthGuard><Dashboard/></AuthGuard>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/tips" element={<Tips/>}/>
        

        
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoute;
