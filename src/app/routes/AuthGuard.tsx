/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../shared/router/routeNames';
import { AuthContext } from '../../entities/Auth/context/AuthProvider';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const AuthGuard = ({ children }: ProtectedRouteProps) => {
  const currentUser = useContext(AuthContext);

  if (currentUser) {
    return <>{children}</>;
  }

  return <Navigate to={ROUTE_NAMES.LOGIN} replace />;
};
