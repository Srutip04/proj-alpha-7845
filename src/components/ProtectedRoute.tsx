import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Role } from '../types/auth';
import { hasPermission } from '../utils/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: Role;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole = 'user',
}) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!hasPermission(user.role, requiredRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};