import { Canvas } from 'features/Paint';
import styles from './PaintingPage.module.scss';
import { Tools } from 'entities/Tools';

export const PaintingPage = () => {
  return (
    <div className={styles.container}>
      <Tools />
      <Canvas />
    </div>
  );
};
