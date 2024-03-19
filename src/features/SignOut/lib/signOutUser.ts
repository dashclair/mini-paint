import { auth } from 'app/config/firbase';
import { signOut } from 'firebase/auth';

export const signOutUser = async () => {
  await signOut(auth);
};
