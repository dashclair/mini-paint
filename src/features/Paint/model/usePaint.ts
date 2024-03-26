import { MouseEvent, useEffect, useRef, useState } from 'react';

export interface UsePaintHookProps {
  width: string;
  tool: string | null;
  color: string;
}

export const usePaint = ({ width, tool, color }: UsePaintHookProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [previousPosition, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const context = contextRef.current;

  useEffect(() => {
    if (canvasRef.current) {
      contextRef.current = canvasRef.current.getContext('2d');
    }
  }, []);

  const handleDrawCircle = (x: number, y: number) => {
    if (context) {
      context.strokeStyle = color;
      context.lineWidth = +width;
      context.lineWidth = +width;
      const CircleWidth = x - previousPosition.x;
      const CircleHeight = y - previousPosition.y;
      const radius = Math.sqrt(CircleWidth ** 2 + CircleHeight ** 2);
      context.beginPath();
      context.arc(previousPosition.x, previousPosition.y, radius, 0, 2 * Math.PI, false);
      context.stroke();
      context.fillStyle = color;
      context.fill();
    }
  };

  const handleDrawLine = (x: number, y: number) => {
    context?.beginPath();
    if (context) {
      context.lineJoin = 'round';
      context.strokeStyle = color;
      context.lineWidth = +width;
      context.moveTo(previousPosition.x, previousPosition.y);
      context.lineTo(x, y);
      context.stroke();
    }
  };

  const draw = (x: number, y: number) => {
    if (!isDrawing) {
      return;
    }

    if (context) {
      context?.beginPath();
      context.strokeStyle = color;
      context.lineWidth = +width;
      context.lineJoin = 'round';
      context.moveTo(previousPosition.x, previousPosition.y);
      context.lineTo(x, y);
      context.closePath();
      context.stroke();
    }

    setPosition({ x, y });
  };

  const drawRectangle = (x: number, y: number) => {
    if (context) {
      context.strokeStyle = color;
      context.lineWidth = +width;
      const recWidth = x - previousPosition.x;
      const recHeight = y - previousPosition.y;
      context.strokeRect(previousPosition.x, previousPosition.y, recWidth, recHeight);
      context.fillStyle = color;
      context.fillRect(previousPosition.x, previousPosition.y, recWidth, recHeight);
    }
  };

  const startDrawing = (e: MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    context?.beginPath;
    context?.moveTo(offsetX, offsetY);
    setPosition({ x: offsetX, y: offsetY });
    setIsDrawing(true);
  };

  const endDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    context?.closePath;

    if (isDrawing) {
      switch (tool) {
        case 'line':
          handleDrawLine(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          break;

        default:
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

  const handleClear = () => {
    context?.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };

  return { canvasRef, startDrawing, endDrawing, handleMouseMove, handleClear, context };
};
