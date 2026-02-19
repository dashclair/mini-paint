import { ButtonProps } from 'antd';
import { ReactNode } from 'react';

export interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
}
