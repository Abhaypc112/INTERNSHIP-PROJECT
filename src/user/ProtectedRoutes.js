// components/ProtectedRoutes.jsx
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Replace with your actual auth logic

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
