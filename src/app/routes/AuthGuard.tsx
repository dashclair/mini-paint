import { memo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE_NAMES } from '../../shared/router/routeNames';
import { useAuth } from '../../entities/Auth';

export const AuthGuard = memo(() => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={ROUTE_NAMES.LOGIN} replace />;
  }

  return <Outlet />;
});
