import { Spin } from 'antd';
import styles from './LayoutLoader.module.scss';

export const LayoutLoader = () => {
  return (
    <div className={styles.container}>
      <Spin size="large" />
    </div>
  );
};
