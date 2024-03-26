import { Controller, useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Form, Input } from 'antd';
import { selectUser } from 'entities/User';
import { emailValidationRules, passwordValidationRules } from 'shared/helpers';
import { RegistrationInputProps } from '../types/RegistrationInput.types';
import { ROUTE_NAMES } from 'shared/router/routeNames';
import { AuthFormContainer, CustomButton } from 'shared/ui';
import { useAppSelector } from 'shared/model/hooks';
import { useMutation } from 'shared/model/useMutation';
import { UserCredential, createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from 'app/config/firbase';
import 'react-toastify/dist/ReactToastify.css';
import styles from './RegistrationForm.module.scss';

export const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegistrationInputProps>();

  const { mutate, isLoading } = useMutation<RegistrationInputProps, UserCredential>(
    ({ email, password }) => createUserWithEmailAndPassword(auth, email, password),
  );

  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const isAuth = user.isAuth;

  if (isAuth) {
    return <Navigate to={ROUTE_NAMES.HOME} />;
  }

  const handleLogin = () => {
    navigate(ROUTE_NAMES.LOGIN);
  };

  const handleSubmitRegistration = async (data: RegistrationInputProps) => {
    await mutate(data);
  };

  const confirmPasswordValidationRules = {
    required: 'Confirm password is required',
    validate: {
      matchesPreviousPassword: (value: string) => {
        const password = watch('password');
        return value === password || 'Passwords do not match';
      },
    },
  };

  return (
    <AuthFormContainer>
      <ToastContainer />
      <h1 className={styles.title}>Registration</h1>
      <Form className={styles.form} onFinish={handleSubmit(handleSubmitRegistration)}>
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
        <Controller
          name="confirmPassword"
          control={control}
          rules={confirmPasswordValidationRules}
          render={({ field }) => (
            <Form.Item
              validateStatus={errors.confirmPassword ? 'error' : ''}
              help={errors.confirmPassword && errors.confirmPassword.message}
            >
              <Input.Password
                size="large"
                placeholder="Confirm password"
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
            onClick={handleLogin}
          >
            Sign in
          </CustomButton>
          <CustomButton
            disabled={isLoading}
            className={`${styles.btn} ${styles.btn_primary}`}
            size="large"
            htmlType="submit"
          >
            Register
          </CustomButton>
        </div>
      </Form>
    </AuthFormContainer>
  );
};
