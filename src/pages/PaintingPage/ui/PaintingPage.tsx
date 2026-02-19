import { Canvas } from 'features/Paint';
import { Tools } from 'entities/Tools';
import { usePaintingPage } from '../lib/usePaintinPage';
import styles from './PaintingPage.module.scss';

const PaintingPage = () => {
  const { tool, setTool, width, setWidth, setColor, color, handleUploadFile } = usePaintingPage();

  return (
    <div className={styles.container}>
      <Tools
        width={width}
        setWidth={setWidth}
        setTool={setTool}
        color={color}
        setColor={setColor}
      />
      <Canvas color={color} width={width} tool={tool} handleUploadImage={handleUploadFile} />
    </div>
  );
};

export default PaintingPage;
