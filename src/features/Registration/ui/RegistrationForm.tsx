import { Input } from 'antd';
import { AuthFormContainer, CustomButton } from '../../../shared/ui';
import styles from './RegistrationForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../shared/router/routeNames';

export const RegistrationForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(RouteNames.LOGIN);
  };

  return (
    <AuthFormContainer>
      <h1 className={styles.title}>Registration</h1>
      <form className={styles.form}>
        <Input size="large" placeholder="Name" className={styles.input} />
        <Input size="large" placeholder="Surname" className={styles.input} />
        <Input size="large" placeholder="Email" className={styles.input} />
        <Input.Password size="large" placeholder="Password" className={styles.input} />
        <Input.Password
          size="large"
          placeholder="Confirm password"
          type="email"
          className={styles.input}
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
          />
        </div>
      </form>
    </AuthFormContainer>
  );
};
