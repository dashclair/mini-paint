import { CustomButton } from '../../../shared/ui';
import { handleSignOut } from '../../../entities/Auth';

export const SignOutButton = () => {
  return <CustomButton type="link" text="sign out" onClick={handleSignOut} />;
};
