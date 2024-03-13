import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainLayout } from '../shared/ui/index.ts';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import './config/firbase.ts';

import './index.css';
import { AppRouter } from './routes/AppRouter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </Provider>
  </React.StrictMode>,
);
