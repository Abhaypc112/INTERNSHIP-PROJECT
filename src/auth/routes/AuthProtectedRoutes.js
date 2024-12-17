import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AuthProtectedRoutes = () => {
  const isAuthenticatedUser = localStorage.getItem("user");
  const isAuthenticatedAdmin =localStorage.getItem("admin");
  if(isAuthenticatedUser){
    return <Navigate to="/" />;
  }else if(isAuthenticatedAdmin){
    return <Navigate to="/admin" />;
  }else{
    return <Outlet />;
  }
};

export default AuthProtectedRoutes;