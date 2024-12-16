import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AdminProtectedRoutes = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default AdminProtectedRoutes;