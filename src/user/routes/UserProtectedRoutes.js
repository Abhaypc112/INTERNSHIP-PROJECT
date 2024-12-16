import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const UserProtectedRoutes = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default UserProtectedRoutes;