import { useUser } from 'entities/User';
import { LayoutLoader } from '../shared/ui';
import { AppRouter } from './routes/AppRouter';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const { isLoading } = useUser();

  return (
    <LayoutLoader isLoading={isLoading}>
      <ToastContainer position="top-left" />
      <AppRouter />
    </LayoutLoader>
  );
};
