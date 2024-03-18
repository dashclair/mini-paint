import { useAuth } from '../entities/Auth';
import { LayoutLoader } from '../shared/ui';
import { MainLayout } from '../shared/ui';
import { Header } from '../widgets/Header';
import { AppRouter } from './routes/AppRouter';

export const App = () => {
  const { isLoading } = useAuth();

  return isLoading ? (
    <LayoutLoader />
  ) : (
    <>
      <Header />
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </>
  );
};
