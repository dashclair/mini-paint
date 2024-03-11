import { MainLayoutProps } from './MainLayout.types';
import styles from './MainLayout.module.scss';

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <div className={styles.main}>{children}</div>;
};
