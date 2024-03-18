import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ROUTE_NAMES } from '../../shared/router/routeNames';
import { AuthGuard } from './AuthGuard';
import { MainPage } from '../../pages/MainPage';
import { LoginPage, RegistrationPage } from '../../pages';
import { PaintingPage } from '../../pages/PaintingPage';

export const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/painting"
          element={
            <AuthGuard>
              <PaintingPage />
            </AuthGuard>
          }
        />
        <Route
          path={ROUTE_NAMES.HOME}
          element={
            <AuthGuard>
              <MainPage />
            </AuthGuard>
          }
        />
        <Route path={ROUTE_NAMES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTE_NAMES.SIGNUP} element={<RegistrationPage />} />
      </>,
    ),
  );

  return <RouterProvider router={router} />;
};
