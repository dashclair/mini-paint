import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

export const useAuth = () => {
  const { currentUser, pending } = useContext(AuthContext);
  return { currentUser, pending };
};
