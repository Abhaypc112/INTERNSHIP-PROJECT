import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AdminProtectedRoutes = () => {
  const isAuthenticated = localStorage.getItem("admin");
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default AdminProtectedRoutes;