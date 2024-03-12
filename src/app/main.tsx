import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.tsx';
import { MainLayout } from '../shared/ui/index.ts';
import './config/firbase.ts';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainLayout>
      <RouterProvider router={router}></RouterProvider>
    </MainLayout>
  </React.StrictMode>,
);
