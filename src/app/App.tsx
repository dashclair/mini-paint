import { useUser } from 'entities/User';
import { LayoutLoader } from '../shared/ui';
import { AppRouter } from './routes/AppRouter';
import { ToastContainer } from 'react-toastify';
import { useTheme } from 'features/Theme/model/useTheme';

export const App = () => {
  const { isLoading } = useUser();
  useTheme();

  return (
    <LayoutLoader isLoading={isLoading}>
      <ToastContainer position="top-left" />
      <AppRouter />
    </LayoutLoader>
  );
};
