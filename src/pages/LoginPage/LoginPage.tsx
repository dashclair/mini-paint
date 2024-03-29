import { LoginForm } from 'features/Login';
import { AuthLayout } from 'shared/ui';

export const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};
