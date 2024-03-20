import { ChangeEvent } from 'react';

export interface ToolsProps {
  width: string;
  color?: string;
  tool?: string;
  setWidth: (value: string) => void;
  setColor?: (e: ChangeEvent<HTMLInputElement>) => void;
  setTool: (value: string) => void;
}
