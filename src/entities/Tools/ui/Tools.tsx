import { CustomButton, IconComponent } from 'shared/ui';
import { ToolsProps } from '../helpers/Tools.types';
import { ChangeEvent, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import styles from './Tools.module.scss';

type ToolType = 'pen' | 'circle' | 'rectangle' | 'line' | 'default';

export const Tools = ({ color, width, setWidth, setTool, setColor }: ToolsProps) => {
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
      <button className={styles.colorPickerButton} type="submit">
        <HexColorPicker className={styles.colorPicker} color={color} onChange={setColor} />
      </button>
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
      <div className={styles.buttonsContainer}>
        <CustomButton
          type="text"
          role="submit"
          className={`${styles.toolsButton} ${activePenTool}`}
          onClick={handleSetPen}
        >
          <IconComponent className={`${styles.icon} `} iconName="pen" />
        </CustomButton>
        <CustomButton
          type="text"
          role="submit"
          className={`${styles.toolsButton} ${activeCircleTool}`}
          onClick={handleSetCircle}
        >
          <IconComponent iconName="circle" />
        </CustomButton>
        <CustomButton
          type="text"
          role="submit"
          className={`${styles.toolsButton} ${activeRectangleTool}`}
          onClick={handleSetRectangle}
        >
          <IconComponent iconName="rectangle" />
        </CustomButton>
        <CustomButton
          type="text"
          role="submit"
          className={`${styles.toolsButton} ${activeLineTool}`}
          onClick={handleSetLine}
        >
          <IconComponent iconName="line" />
        </CustomButton>
      </div>
    </div>
  );
};
