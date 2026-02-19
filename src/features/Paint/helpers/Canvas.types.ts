export interface CanvasProps {
  width: string;
  tool: string | null;
  color: string;
  isLoading?: boolean;
  handleUploadImage: (variables: string) => Promise<void>;
}
