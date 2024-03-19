import { CustomButton } from 'shared/ui';
import { handleSignOut } from 'entities/Auth';
import styles from './SignOutButton.module.scss';
import { IconComponent } from 'shared/ui';

export const SignOutButton = () => {
  return (
    <CustomButton className={styles.buttonContainer} type="link" onClick={handleSignOut}>
      {<IconComponent iconName="exit" />}
    </CustomButton>
  );
};
