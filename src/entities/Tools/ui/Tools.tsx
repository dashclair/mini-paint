import { IconComponent } from 'shared/ui';
import styles from './Tools.module.scss';
import { ToolsProps } from '../helpers/Tools.types';
import { ChangeEvent, useState } from 'react';

type ToolType = 'pen' | 'circle' | 'rectangle' | 'line' | 'default';

export const Tools = ({ width, setWidth, setTool }: ToolsProps) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleSetWidth = (e: ChangeEvent<HTMLInputElement>) => {
    setWidth(e.target.value);
  };

  const handleSetPen = () => {
    setActiveButton('pen');
    setTool('pen');
  };

  const handleSetCircle = () => {
    setTool('circle');
    setActiveButton('circle');
  };

  const handleSetRectangle = () => {
    setTool('rectangle');
    setActiveButton('rectangle');
  };

  const handleSetLine = () => {
    setTool('line');
    setActiveButton('line');
  };

  const setButtonActiveStyles = (type: ToolType, button: string | null) => {
    return button === type ? styles[type] : '';
  };

  const activePenTool = setButtonActiveStyles('pen', activeButton);
  const activeCircleTool = setButtonActiveStyles('circle', activeButton);
  const activeRectangleTool = setButtonActiveStyles('rectangle', activeButton);
  const activeLineTool = setButtonActiveStyles('line', activeButton);

  return (
    <div className={styles.container}>
      <div className={styles.buttonsContainer}>
        <button className={styles.penwidth} type="submit">
          <input
            className={styles.penwidthInput}
            type="range"
            value={width}
            onChange={handleSetWidth}
            min="5"
            max="50"
            step="5"
          />
        </button>
        <button
          className={`${styles.toolsButton} ${activePenTool}`}
          onClick={handleSetPen}
          type="submit"
        >
          <IconComponent className={`${styles.icon} `} iconName="pen" />
        </button>
        <button
          className={`${styles.toolsButton} ${activeCircleTool}`}
          onClick={handleSetCircle}
          type="submit"
        >
          <IconComponent iconName="circle" />
        </button>
        <button
          className={`${styles.toolsButton} ${activeRectangleTool}`}
          onClick={handleSetRectangle}
          type="submit"
        >
          <IconComponent iconName="rectangle" />
        </button>
        <button
          className={`${styles.toolsButton} ${activeLineTool}`}
          onClick={handleSetLine}
          type="submit"
        >
          <IconComponent iconName="line" />
        </button>
      </div>
    </div>
  );
};
