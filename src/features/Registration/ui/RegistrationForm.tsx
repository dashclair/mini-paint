import { Input } from 'antd';
import { AuthFormContainer, CustomButton } from '../../../shared/ui';
import { Controller, useForm } from 'react-hook-form';
import { RegistrationInputProps } from '../types/RegistrationInput.types';
import { useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../../shared/router/routeNames';
import styles from './RegistrationForm.module.scss';
import { signUp } from '../../../entities/Auth/helpers/authServices';

export const RegistrationForm = () => {
  const { control, handleSubmit } = useForm<RegistrationInputProps>();
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

  return (
    <AuthFormContainer>
      <h1 className={styles.title}>Registration</h1>
      <form className={styles.form} onSubmit={handleSubmit(handleSubmitRegistration)}>
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
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <Input.Password
              size="large"
              placeholder="Confirm password"
              className={styles.input}
              {...field}
            />
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
      </form>
    </AuthFormContainer>
  );
};
