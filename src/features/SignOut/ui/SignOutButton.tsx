import { CustomButton } from 'shared/ui';
import { handleSignOut } from 'entities/Auth';
import { IconComponent } from 'shared/ui';
import styles from './SignOutButton.module.scss';

export const SignOutButton = () => {
  return (
    <CustomButton type="link" onClick={handleSignOut}>
      {<IconComponent iconName="exit" className={styles.exitIcon} />}
    </CustomButton>
  );
};
