import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const handleSignUp = (email: string, password: string) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password).then(console.log).catch(console.error);
};
