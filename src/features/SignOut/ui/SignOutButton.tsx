import { CustomButton } from '../../../shared/ui';
import { useAppDispatch } from '../../../shared/model/hooks';
import { signOut } from 'firebase/auth';
import { auth } from '../../../app/config/firbase';
import { setUnAuth } from '../../../entities/User/model/userSlice';

export const SignOutButton = () => {
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('sign out');
        dispatch(setUnAuth());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <CustomButton type="link" text="sign out" onClick={handleSignOut} />;
};
