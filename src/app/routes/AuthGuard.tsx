/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../shared/router/routeNames';
import { useAuth } from '../../entities/Auth';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const AuthGuard = ({ children }: ProtectedRouteProps) => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <>{children}</>;
  }

  return <Navigate to={ROUTE_NAMES.LOGIN} replace />;
};
