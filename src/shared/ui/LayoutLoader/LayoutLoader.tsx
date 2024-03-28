import { Spin } from 'antd';
import { ReactNode } from 'react';

export interface LayoutLoaderProps {
  isLoading: boolean;
  children: ReactNode;
}

export const LayoutLoader = ({ isLoading, children }: LayoutLoaderProps) => {
  return isLoading ? <Spin fullscreen size="large" /> : children;
};
