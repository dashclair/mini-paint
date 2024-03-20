import styles from './Cnavas.module.scss';
import { CanvasProps } from 'features/Paint/helpers/Canvas.types';
import { usePaint } from 'features/Paint/model/usePaint';
import { CustomButton } from 'shared/ui';

export const Canvas = ({ width, tool }: CanvasProps) => {
  const { startDrawing, handleMouseMove, canvasRef, endDrawing, handleClear } = usePaint({
    width,
    tool,
  });
  return (
    <>
      <canvas
        width={600}
        height={450}
        className={styles.canvas}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={handleMouseMove}
        ref={canvasRef}
      />
      <CustomButton type="text" onClick={handleClear}>
        Clear
      </CustomButton>
    </>
  );
};
