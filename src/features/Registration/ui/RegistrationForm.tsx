/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input } from 'antd';
import { AuthFormContainer, CustomButton } from '../../../shared/ui';
import { Controller, useForm } from 'react-hook-form';
import { RegistrationInputProps } from '../types/RegistrationInput.types';
import { useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../../shared/router/routeNames';
import styles from './RegistrationForm.module.scss';
import { emailValidationRules, passwordValidationRules, signUp } from '../../../entities/Auth';

export const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegistrationInputProps>();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(ROUTE_NAMES.LOGIN);
  };

  const handleSubmitRegistration = async (data: RegistrationInputProps) => {
    try {
      await signUp(data);
      navigate(ROUTE_NAMES.HOME);
    } catch (error) {
      console.log(error);
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
          rules={confirmPasswordValidationRules as any}
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
            text="Sign in"
            type="default"
            className={styles.btn}
            size="large"
            onClick={handleLogin}
          />
          <CustomButton
            className={`${styles.btn} ${styles.btn_primary}`}
            text="Register"
            size="large"
            htmlType="submit"
          />
        </div>
      </Form>
    </AuthFormContainer>
  );
};
