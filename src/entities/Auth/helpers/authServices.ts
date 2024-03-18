import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginInputProps } from '../../../features/Login/types/LoginInput.types';
import { auth } from '../../../app/config/firbase';
import { RegistrationInputProps } from '../../../features/Registration/types/RegistrationInput.types';

export const signIn = async ({ email, password }: LoginInputProps) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log('error code', error);
  }
};

export const signUp = async ({ email, password }: RegistrationInputProps) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return console.error(error);
  }
};
