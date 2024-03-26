import { Controller, useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { Form, Input } from 'antd';
import { selectUser } from 'entities/User';
import { AuthFormContainer, CustomButton } from 'shared/ui';
import { LoginInputProps } from '../types/LoginInput.types';
import { ROUTE_NAMES } from 'shared/router/routeNames';
import { ToastContainer } from 'react-toastify';
import { useAppSelector } from 'shared/model/hooks';
import { emailValidationRules, passwordValidationRules } from 'shared/helpers';
import { useMutation } from 'shared/model/useMutation';
import { UserCredential, signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from 'app/config/firbase';
import 'react-toastify/dist/ReactToastify.css';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputProps>();

  const navigate = useNavigate();

  const user = useAppSelector(selectUser);
  const isAuth = user.isAuth;

  const { mutate, isLoading } = useMutation<LoginInputProps, UserCredential>(
    ({ email, password }) => signInWithEmailAndPassword(auth, email, password),
  );

  if (isAuth) {
    console.log('navigate');
    return <Navigate to={ROUTE_NAMES.HOME} />;
  }

  const handleSubmitForm = async ({ email, password }: LoginInputProps) => {
    const data = await mutate({ email, password });
    console.log('data', data);
  };

  const handleRegistration = () => {
    navigate(ROUTE_NAMES.SIGNUP);
  };

  return (
    <AuthFormContainer>
      <ToastContainer />
      <h1 className={styles.title}>Sign in</h1>
      <Form className={styles.form} onFinish={handleSubmit(handleSubmitForm)}>
        <Controller
          name="email"
          control={control}
          rules={emailValidationRules}
          render={({ field }) => (
            <Form.Item
              validateStatus={errors.email ? 'error' : ''}
              help={errors.email && errors.email.message}
            >
              <Input size="large" placeholder="Email" className={styles.input} {...field} />
            </Form.Item>
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={passwordValidationRules}
          render={({ field }) => (
            <Form.Item
              validateStatus={errors.password ? 'error' : ''}
              help={errors.password && errors.password.message}
            >
              <Input.Password
                size="large"
                placeholder="Password"
                className={styles.input}
                {...field}
              />
            </Form.Item>
          )}
        />
        <div className={styles.btnContainer}>
          <CustomButton
            disabled={isLoading}
            type="default"
            className={styles.btn}
            size="large"
            onClick={handleRegistration}
          >
            Create account
          </CustomButton>
          <CustomButton
            disabled={isLoading}
            className={`${styles.btn} ${styles.btn_primary}`}
            size="large"
            htmlType="submit"
          >
            Sign in
          </CustomButton>
        </div>
      </Form>
    </AuthFormContainer>
  );
};
