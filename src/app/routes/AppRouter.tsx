import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { protectedRoutes } from './protectedRoutes';
import { publicRoutes } from './publicRoutes';
import { MainLayout } from 'shared/ui';
import { Header } from 'widgets/Header';
import { Suspense } from 'react';
import { Spin } from 'antd';

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: (
        <>
          <Header />
          <MainLayout>
            <Suspense fallback={<Spin />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        </>
      ),
      children: [
        ...publicRoutes,
        {
          element: <AuthGuard />,
          children: protectedRoutes,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
