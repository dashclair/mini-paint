import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_NAMES } from '../../shared/router/routeNames';
import { LoginPage, RegistrationPage } from '../../pages';

export const router = createBrowserRouter([
  { path: ROUTE_NAMES.HOME, element: '' },
  { path: ROUTE_NAMES.LOGIN, element: <LoginPage /> },
  { path: ROUTE_NAMES.SIGNUP, element: <RegistrationPage /> },
]);
