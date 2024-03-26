import { useUser } from 'entities/User';
import { LayoutLoader } from '../shared/ui';
import { AppRouter } from './routes/AppRouter';

export const App = () => {
  const { isLoading } = useUser();

  return (
    <LayoutLoader isLoading={isLoading}>
      <AppRouter />
    </LayoutLoader>
  );
};
