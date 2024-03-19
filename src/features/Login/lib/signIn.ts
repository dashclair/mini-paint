import { signInWithEmailAndPassword } from 'firebase/auth';
import { LoginInputProps } from '../types/LoginInput.types';
import { auth } from 'app/config/firbase';

export const signIn = ({ email, password }: LoginInputProps) => {
  return signInWithEmailAndPassword(auth, email, password);
};
