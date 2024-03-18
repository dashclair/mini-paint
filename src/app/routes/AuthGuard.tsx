import { ReactNode, memo } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../shared/router/routeNames';
import { useAuth } from '../../entities/Auth';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const AuthGuard = memo(({ children }: ProtectedRouteProps) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={ROUTE_NAMES.LOGIN} replace />;
  }

  return <>{children}</>;
});
