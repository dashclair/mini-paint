import { Spin } from 'antd';
import styles from './LayoutLoader.module.scss';
import { ReactNode } from 'react';

export interface LayoutLoaderProps {
  isLoading: boolean;
  children: ReactNode;
}

export const LayoutLoader = ({ isLoading, children }: LayoutLoaderProps) => {
  return isLoading ? (
    <div className={styles.container}>
      <Spin size="large" />
    </div>
  ) : (
    children
  );
};
