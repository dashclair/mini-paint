export interface CanvasProps {
  width: string;
  tool: string | null;
  color: string;
  isLoading?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleUploadImage?: any;
}
