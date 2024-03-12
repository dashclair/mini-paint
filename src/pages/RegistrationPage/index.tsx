import { CreateAccount } from '../../features/Registration';
import { AuthLayout } from '../../shared/ui';

export const RegistrationPage = () => {
  return (
    <AuthLayout>
      <CreateAccount />
    </AuthLayout>
  );
};
