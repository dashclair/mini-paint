import { memo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE_NAMES } from 'shared/router/routeNames';
import { useUser } from 'entities/User';

export const AuthGuard = memo(() => {
  const { isAuth } = useUser();

  if (!isAuth) {
    return <Navigate to={ROUTE_NAMES.LOGIN} replace />;
  }

  return <Outlet />;
});
