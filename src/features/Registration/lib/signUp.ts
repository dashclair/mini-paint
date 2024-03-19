import { createUserWithEmailAndPassword } from 'firebase/auth';
import { RegistrationInputProps } from '../types/RegistrationInput.types';
import { auth } from 'app/config/firbase';

export const signUp = ({ email, password }: RegistrationInputProps) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
