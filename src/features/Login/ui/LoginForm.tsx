import { AuthFormContainer, CustomButton } from '../../../shared/ui';
import { LoginInputProps } from '../types/LoginInput.types';
import { Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../../shared/router/routeNames';
import { emailValidationRules, passwordValidationRules, signIn } from '../../../entities/Auth';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputProps>();
  const navigate = useNavigate();

  const handleSubmitForm = async ({ email, password }: LoginInputProps) => {
    try {
      await signIn({ email, password });
      navigate(ROUTE_NAMES.HOME);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegistration = () => {
    navigate(ROUTE_NAMES.SIGNUP);
  };

  return (
    <AuthFormContainer>
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
      </Form>
    </AuthFormContainer>
  );
};
