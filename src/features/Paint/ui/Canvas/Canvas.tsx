import styles from './Cnavas.module.scss';
import { CanvasProps } from 'features/Paint/helpers/Canvas.types';
import { usePaint } from 'features/Paint/model/usePaint';
import { CustomButton } from 'shared/ui';

export const Canvas = ({ color, width, tool, handleUploadImage, isLoading }: CanvasProps) => {
  const { startDrawing, handleMouseMove, canvasRef, endDrawing, handleClear, handleSave } =
    usePaint({
      width,
      tool,
      color,
    });

  const handlePicSave = () => {
    handleSave(handleUploadImage);
  };

  return (
    <div className={styles.canvasContainer}>
      <canvas
        width={700}
        height={450}
        className={styles.canvas}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={handleMouseMove}
        ref={canvasRef}
      />
      <div className={styles.buttonsContainer}>
        <CustomButton className={styles.buttons} type="primary" onClick={handleClear}>
          Clear
        </CustomButton>
        <CustomButton
          disabled={isLoading}
          className={styles.buttons}
          type="primary"
          onClick={handlePicSave}
        >
          Save
        </CustomButton>
      </div>
    </div>
  );
};
