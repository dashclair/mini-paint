import { ReactNode } from 'react';
import styles from './AuthFormContainer.module.scss';

interface AuthFormContainerProps {
  children: ReactNode;
}

export const AuthFormContainer = ({ children }: AuthFormContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};
