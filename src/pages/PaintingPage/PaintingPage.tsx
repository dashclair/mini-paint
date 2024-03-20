import { Canvas } from 'features/Paint';
import styles from './PaintingPage.module.scss';
import { Tools } from 'entities/Tools';
import { useState } from 'react';

export const PaintingPage = () => {
  const [tool, setTool] = useState<string | null>(null);
  const [width, setWidth] = useState<string>('3');
  return (
    <div className={styles.container}>
      <Tools width={width} setWidth={setWidth} setTool={setTool} />
      <Canvas width={width} tool={tool} />
    </div>
  );
};
