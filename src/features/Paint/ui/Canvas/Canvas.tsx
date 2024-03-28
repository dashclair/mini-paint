import { CanvasProps } from 'features/Paint/helpers/Canvas.types';
import { usePaint } from 'features/Paint/model/usePaint';
import { useMutation } from 'shared/model/useMutation';
import { CustomButton } from 'shared/ui';
import styles from './Cnavas.module.scss';

export const Canvas = ({ color, width, tool, handleUploadImage, isLoading }: CanvasProps) => {
  const { startDrawing, handleMouseMove, canvasRef, endDrawing, handleClear, context } = usePaint({
    width,
    tool,
    color,
  });

  const { mutate, isLoading } = useMutation(handleUploadImage);

  const handleSave = () => {
    if (context) {
      const url = context.canvas.toDataURL();
      const pic = url?.substring(22, url.length);

      mutate(pic);
    }
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
        <CustomButton
          disabled={isLoading}
          className={styles.buttons}
          type="primary"
          onClick={handleClear}
        >
          Clear
        </CustomButton>
        <CustomButton
          disabled={isLoading}
          className={styles.buttons}
          type="primary"
          onClick={handleSave}
        >
          Save
        </CustomButton>
      </div>
    </div>
  );
};
