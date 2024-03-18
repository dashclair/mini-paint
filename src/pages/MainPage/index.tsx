import { useAuth } from '../../entities/Auth/model/useAuth';

export const MainPage = () => {
  useAuth();
  return <div>Main page</div>;
};
