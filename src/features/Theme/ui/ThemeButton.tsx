import { CustomButton, IconComponent } from 'shared/ui';
import { useTheme } from '../model/useTheme';
import styles from './ThemeButton.module.scss';

export const ThemeButton = () => {
  const { theme, handleSetTheme } = useTheme();

  return (
    <CustomButton type="link" className={styles.themeButton} onClick={handleSetTheme}>
      {theme === 'dark' ? (
        <IconComponent iconName="darkMode" />
      ) : (
        <IconComponent iconName="lightMode" />
      )}
    </CustomButton>
  );
};
