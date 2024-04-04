import { MainPage } from 'pages/MainPage';
import { PaintingPage } from 'pages/PaintingPage';
import { RouteObject } from 'react-router-dom';
import { ROUTE_NAMES } from 'shared/router/routeNames';

export const protectedRoutes: RouteObject[] = [
  {
    children: [
      {
        path: ROUTE_NAMES.HOME,
        element: <MainPage />,
      },
      {
        path: ROUTE_NAMES.PAINTER,
        element: <PaintingPage />,
      },
    ],
  },
];
