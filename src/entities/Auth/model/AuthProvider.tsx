import { createContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../app/config/firbase';
import { AuthProviderProps } from './AuthProvider.types';
import { LayoutLoader } from '../ui/LayoutLoader/LayoutLoader';

export const AuthContext = createContext<IContextProps>({ currentUser: null, pending: true });

interface IContextProps {
  currentUser: User | null;
  pending: boolean;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  console.log('current user', currentUser);

  if (pending) {
    return <LayoutLoader />;
  }

  return <AuthContext.Provider value={{ currentUser, pending }}>{children}</AuthContext.Provider>;
};
