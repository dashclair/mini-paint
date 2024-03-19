import { LoginPage, RegistrationPage } from 'pages';
import { RouteObject } from 'react-router-dom';
import { ROUTE_NAMES } from 'shared/router/routeNames';

export const publicRoutes: RouteObject[] = [
  {
    children: [
      {
        path: ROUTE_NAMES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTE_NAMES.SIGNUP,
        element: <RegistrationPage />,
      },
    ],
  },
];
