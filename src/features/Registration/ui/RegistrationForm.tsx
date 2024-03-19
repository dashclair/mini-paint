import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Form, Input } from 'antd';
import { selectUser } from '../../../entities/User';
import { emailValidationRules, passwordValidationRules, signUp } from '../../../entities/Auth';
import { RegistrationInputProps } from '../types/RegistrationInput.types';
import { ROUTE_NAMES } from '../../../shared/router/routeNames';
import { AuthFormContainer, CustomButton } from '../../../shared/ui';
import { useAppSelector } from '../../../shared/model/hooks';
import 'react-toastify/dist/ReactToastify.css';
import styles from './RegistrationForm.module.scss';

export const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegistrationInputProps>();

  const navigate = useNavigate();
  const user = useAppSelector(selectUser);

  const isAuth = user.isAuth;

  useEffect(() => {
    if (isAuth) {
      console.log('navigate');
      navigate(ROUTE_NAMES.HOME);
    }
  }, [isAuth]);

  const handleLogin = () => {
    navigate(ROUTE_NAMES.LOGIN);
  };

  const handleSubmitRegistration = async (data: RegistrationInputProps) => {
    try {
      await signUp(data);
      navigate(ROUTE_NAMES.HOME);
    } catch (error) {
      toast.error('This email is used');
    }
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
          <CustomButton type="default" className={styles.btn} size="large" onClick={handleLogin}>
            Sign in
          </CustomButton>
          <CustomButton
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
