import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginInputProps } from '../../../features/Login/types/LoginInput.types';
import { auth } from '../../../app/config/firbase';
import { RegistrationInputProps } from '../../../features/Registration/types/RegistrationInput.types';

export const signIn = ({ email, password }: LoginInputProps) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUp = ({ email, password }: RegistrationInputProps) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
