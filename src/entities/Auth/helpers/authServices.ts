import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginInputProps } from '../../../features/Login/types/LoginInput.types';
import { auth } from '../../../app/config/firbase';
import { RegistrationInputProps } from '../../../features/Registration/types/RegistrationInput.types';

export const signIn = async ({ email, password }: LoginInputProps) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    console.log('error code', error);
  }
};

export const signUp = async ({ email, password }: RegistrationInputProps) => {
  try {
    const message = await createUserWithEmailAndPassword(auth, email, password);
    return console.log(message);
  } catch (error) {
    return console.error(error);
  }
};
