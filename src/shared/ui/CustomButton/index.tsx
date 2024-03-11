import { Button } from 'antd';
import styles from './CustomButton.module.scss';
import { CustomButtonProps } from './CustomButton.types';

export const CustomButton = ({ className, text, ...props }: CustomButtonProps) => {
  return (
    <Button type="primary" className={`${styles.btn} ${className}`} {...props}>
      {text}
    </Button>
  );
};
