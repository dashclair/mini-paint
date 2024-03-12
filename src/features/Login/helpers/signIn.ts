import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const handleLogin = (email: string, password: string) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(console.log)
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      console.log(errorCode);
    });
};
