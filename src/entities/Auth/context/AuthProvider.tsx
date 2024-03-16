import { createContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../app/config/firbase';
import { useAppDispatch } from '../../../shared/model/hooks';
import { setUser } from '../../User/model/userSlice';
import { AuthProviderProps } from './AuthProvider.types';

export const AuthContext = createContext<unknown>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [pending, setPending] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      dispatch(setUser({ id: user?.uid, email: user?.email }));
      setPending(false);
    });
  }, []);

  console.log('current user', currentUser);

  if (pending) {
    return <div>...Loading</div>;
  }

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};
