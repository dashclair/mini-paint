import { Input } from 'antd';
import { AuthFormContainer, CustomButton } from '../../../shared/ui';
import { Controller, useForm } from 'react-hook-form';
import { RegistrationFormProps } from '../types/RegistrationForm.types';
import { RegistrationInputProps } from '../types/RegistrationInput.types';

import styles from './RegistrationForm.module.scss';

export const RegistrationForm = ({
  handleSubmitRegistration,
  handleLogin,
}: RegistrationFormProps) => {
  const { control, handleSubmit } = useForm<RegistrationInputProps>();

  return (
    <AuthFormContainer>
      <h1 className={styles.title}>Registration</h1>
      <form className={styles.form} onSubmit={handleSubmit(handleSubmitRegistration)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input size="large" placeholder="Name" className={styles.input} {...field} />
          )}
        />
        <Controller
          name="surname"
          control={control}
          render={({ field }) => (
            <Input size="large" placeholder="Surname" className={styles.input} {...field} />
          )}
        />
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
