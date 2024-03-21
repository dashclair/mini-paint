import styles from './Cnavas.module.scss';
import { CanvasProps } from 'features/Paint/helpers/Canvas.types';
import { usePaint } from 'features/Paint/model/usePaint';
// import { useUploadFile } from 'features/Paint/model/useUploadFile';
import { CustomButton } from 'shared/ui';

export const Canvas = ({ color, width, tool, handleUploadImage }: CanvasProps) => {
  const { startDrawing, handleMouseMove, canvasRef, endDrawing, handleClear, context } = usePaint({
    width,
    tool,
    color,
  });

  const handleSave = async () => {
    const url = context!.canvas.toDataURL();
    const pic = url.substring(22, url.length);

    await handleUploadImage(pic);
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
        <CustomButton className={styles.buttons} type="primary" onClick={handleSave}>
          Save
        </CustomButton>
      </div>
    </div>
  );
};
