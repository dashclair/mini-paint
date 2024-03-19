import { CustomButton } from '../../../shared/ui';
import { handleSignOut } from '../../../entities/Auth';
import styles from './SignOutButton.module.scss';
import ExitButton from 'assets/exit.svg?react';

export const SignOutButton = () => {
  return (
    <CustomButton className={styles.buttonContainer} type="link" onClick={handleSignOut}>
      {<ExitButton />}
    </CustomButton>
  );
};
