import { auth } from 'app/config/firbase';
import { onAuthStateChanged } from 'firebase/auth';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/model/hooks';
import { selectUser, setUnAuth, setUser } from '../../User';

export const useUser = () => {
  const dispatch = useAppDispatch();
  const authData = useAppSelector(selectUser);

  const handleOnAuthChanged = useCallback(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user?.uid;
        const email = user?.email;
        dispatch(setUser({ uid, email }));
      } else {
        dispatch(setUnAuth());
      }
    });
  }, [dispatch]);

  useEffect(() => {
    handleOnAuthChanged();
  }, [handleOnAuthChanged]);

  const userId = authData.userData?.uid;
  const userEmail = authData.userData?.email;
  const isAuth = authData.isAuth;
  const isLoading = authData.pending;

  return { userId, isAuth, isLoading, userEmail };
};
