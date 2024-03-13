import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_NAMES } from '../../shared/router/routeNames';
import { LoginPage, RegistrationPage } from '../../pages';
import { MainPage } from '../../pages/MainPage';

export const router = createBrowserRouter([
  {
    path: ROUTE_NAMES.HOME,
    element: <MainPage />,
  },
  { path: ROUTE_NAMES.LOGIN, element: <LoginPage /> },
  { path: ROUTE_NAMES.SIGNUP, element: <RegistrationPage /> },
]);
