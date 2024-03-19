import { useAuth } from '../entities/Auth';
import { LayoutLoader } from '../shared/ui';
import { AppRouter } from './routes/AppRouter';

export const App = () => {
  const { isLoading } = useAuth();

  return isLoading ? (
    <LayoutLoader />
  ) : (
    <>
      <AppRouter />
    </>
  );
};
