import { Canvas } from 'features/Paint';
import styles from './PaintingPage.module.scss';
import { Tools } from 'entities/Tools';
import { useState } from 'react';

export const PaintingPage = () => {
  const [tool, setTool] = useState<string | null>(null);
  const [width, setWidth] = useState<string>('3');
  const [color, setColor] = useState('#aabbcc');

  return (
    <div className={styles.container}>
      <Tools
        width={width}
        setWidth={setWidth}
        setTool={setTool}
        color={color}
        setColor={setColor}
      />
      <Canvas color={color} width={width} tool={tool} />
    </div>
  );
};
