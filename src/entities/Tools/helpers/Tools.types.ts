export interface ToolsProps {
  width: string;
  color?: string;
  tool?: string;
  setWidth: (value: string) => void;
  setColor?: (value: string) => void;
  setTool: (value: string) => void;
}
