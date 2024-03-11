import { useNavigate } from 'react-router-dom';
import { AuthFormContainer, CustomButton } from '../../../shared/ui';
import styles from './LoginForm.module.scss';
import { Input } from 'antd';
import { RouteNames } from '../../../shared/router/routeNames';

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleRegistration = () => {
    navigate(RouteNames.SIGNUP);
  };
  return (
    <AuthFormContainer>
      <h1 className={styles.title}>Sign in</h1>
      <form className={styles.form}>
        <Input size="large" placeholder="Email" className={styles.input} />
        <Input.Password size="large" placeholder="Password" className={styles.input} />
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
            onClick={() => {}}
          />
        </div>
      </form>
    </AuthFormContainer>
  );
};
