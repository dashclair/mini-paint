import { AuthLayoutProps } from './AuthLayout.types';
import styles from './AuthLayout.module.scss';

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <section className={styles.main}>{children}</section>;
};
