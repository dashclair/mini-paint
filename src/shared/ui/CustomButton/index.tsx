import { Button } from 'antd';
import styles from './CustomButton.module.scss';
import { CustomButtonProps } from './CustomButton.types';

export const CustomButton = ({ className, children, ...props }: CustomButtonProps) => {
  return (
    <Button type="primary" className={`${styles.btn} ${className}`} {...props}>
      {children}
    </Button>
  );
};
