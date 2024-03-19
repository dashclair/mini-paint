import { CustomButton } from 'shared/ui';
import { IconComponent } from 'shared/ui';
import styles from './SignOutButton.module.scss';
import { signOutUser } from '../lib/signOutUser';

export const SignOutButton = () => {
  return (
    <CustomButton type="link" onClick={signOutUser}>
      {<IconComponent iconName="exit" className={styles.exitIcon} />}
    </CustomButton>
  );
};
