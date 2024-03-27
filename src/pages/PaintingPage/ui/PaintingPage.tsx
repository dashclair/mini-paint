import { Canvas } from 'features/Paint';
import { Tools } from 'entities/Tools';
import { ToastContainer } from 'react-toastify';
import { usePaintingPage } from '../lib/usePaintinPage';
import styles from './PaintingPage.module.scss';

export const PaintingPage = () => {
  const { tool, setTool, width, setWidth, setColor, color, isLoading, handleUploadFile } =
    usePaintingPage();

  return (
    <div className={styles.container}>
      <ToastContainer position="top-left" />
      <Tools
        width={width}
        setWidth={setWidth}
        setTool={setTool}
        color={color}
        setColor={setColor}
      />
      <Canvas
        isLoading={isLoading}
        color={color}
        width={width}
        tool={tool}
        handleUploadImage={handleUploadFile}
      />
    </div>
  );
};
