import { MouseEvent, useEffect, useRef, useState } from 'react';
import styles from './Cnavas.module.scss';
import { CanvasProps } from 'features/Paint/helpers/Canvas.types';

export const Canvas = ({ width, tool }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [previousPosition, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      contextRef.current = context;
    }
  }, []);

  const handleDrawCircle = (x: number, y: number) => {
    // contextRef.current!.strokeStyle = color;
    contextRef.current!.lineWidth = +width;
    const CircleWidth = x - previousPosition.x;
    const CircleHeight = y - previousPosition.y;
    const radius = Math.sqrt(CircleWidth ** 2 + CircleHeight ** 2);
    contextRef.current!.beginPath();
    contextRef.current!.arc(previousPosition.x, previousPosition.y, radius, 0, 2 * Math.PI, false);
    contextRef.current!.stroke();
    // contextRef.current!.fillStyle = color;
    contextRef.current!.fill();
  };

  const handleDrawLine = (x: number, y: number) => {
    contextRef.current!.beginPath();
    contextRef.current!.lineJoin = 'round';
    // contextRef.current!.strokeStyle = color;
    contextRef.current!.lineWidth = +width;
    contextRef.current!.moveTo(previousPosition.x, previousPosition.y);
    contextRef.current!.lineTo(x, y);
    contextRef.current!.stroke();
  };

  const draw = (x: number, y: number) => {
    if (!isDrawing) {
      return;
    }

    contextRef.current?.beginPath();
    // context!.strokeStyle = color;
    contextRef.current!.lineWidth = +width;
    contextRef.current!.lineJoin = 'round';
    contextRef.current!.moveTo(previousPosition.x, previousPosition.y);
    contextRef.current!.lineTo(x, y);
    contextRef.current!.closePath();
    contextRef.current!.stroke();

    setPosition({ x, y });
  };

  const drawRectangle = (x: number, y: number) => {
    // context!.strokeStyle = color;
    contextRef.current!.lineWidth = +width;
    const recWidth = x - previousPosition.x;
    const recHeight = y - previousPosition.y;
    contextRef.current!.strokeRect(previousPosition.x, previousPosition.y, recWidth, recHeight);
    // context!.fillStyle = color;
    contextRef.current!.fillRect(previousPosition.x, previousPosition.y, recWidth, recHeight);
  };

  const startDrawing = (e: MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    contextRef.current?.beginPath;
    contextRef.current?.moveTo(offsetX, offsetY);
    setPosition({ x: offsetX, y: offsetY });
    setIsDrawing(true);
  };

  const endDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    contextRef.current?.closePath;

    if (isDrawing) {
      switch (tool) {
        case 'line':
          handleDrawLine(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          break;

        default:
          // draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          break;
      }
    }
    setIsDrawing(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing) {
      switch (tool) {
        case 'pen':
          draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          break;
        case 'rectangle':
          drawRectangle(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          break;
        case 'circle':
          handleDrawCircle(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          break;
        default:
          break;
      }
    }
  };

  return (
    <canvas
      width={600}
      height={450}
      className={styles.canvas}
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseMove={handleMouseMove}
      ref={canvasRef}
    />
  );
};
