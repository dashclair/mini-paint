import { createBrowserRouter } from 'react-router-dom';
import { RouteNames } from '../../shared/router/routeNames';
import { LoginPage, RegistrationPage } from '../../pages';

export const router = createBrowserRouter([
  { path: RouteNames.HOME, element: '' },
  { path: RouteNames.LOGIN, element: <LoginPage /> },
  { path: RouteNames.SIGNUP, element: <RegistrationPage /> },
]);
