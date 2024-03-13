import { AuthFormContainer, CustomButton } from '../../../shared/ui';
import { LoginInputProps } from '../types/LoginInput.types';
import { Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../../shared/router/routeNames';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import styles from './LoginForm.module.scss';
import { useAppDispatch } from '../../../shared/model/hooks';
import { setUnAuth, setUser } from '../../../entities/User/model/userSlice';

export const LoginForm = () => {
  const { control, handleSubmit } = useForm<LoginInputProps>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('user', user);
      const uid = user.uid;
      dispatch(setUser({ email: user.email, id: uid }));
    } else {
      dispatch(setUnAuth());
    }
  });

  const handleRegistration = () => {
    navigate(ROUTE_NAMES.SIGNUP);
  };

  const handleSubmitForm = ({ email, password }: LoginInputProps) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error code', errorCode);
        console.log('error message', errorMessage);
      });
  };

  return (
    <AuthFormContainer>
      <h1 className={styles.title}>Sign in</h1>
      <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input size="large" placeholder="Email" className={styles.input} {...field} />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Password
              size="large"
              placeholder="Password"
              className={styles.input}
              {...field}
            />
          )}
        />
        <div className={styles.btnContainer}>
          <CustomButton
            text="Create account"
            type="default"
            className={styles.btn}
            size="large"
            onClick={handleRegistration}
          />
          <CustomButton
            className={`${styles.btn} ${styles.btn_primary}`}
            text="Sign in"
            size="large"
            htmlType="submit"
          />
        </div>
      </form>
    </AuthFormContainer>
  );
};
