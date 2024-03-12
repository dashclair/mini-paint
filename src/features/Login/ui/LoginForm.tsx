import { AuthFormContainer, CustomButton } from '../../../shared/ui';
import { LoginInputProps } from '../types/LoginInput.types';
import { Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../../shared/router/routeNames';
import { handleLogin } from '../helpers/signIn';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const { control, handleSubmit } = useForm<LoginInputProps>();
  const navigate = useNavigate();

  const handleRegistration = () => {
    navigate(ROUTE_NAMES.SIGNUP);
  };

  const handleSubmitForm = (data: LoginInputProps) => {
    handleLogin(data.email, data.password);
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
