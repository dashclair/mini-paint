import { useNavigate } from 'react-router-dom';
import { RegistrationForm } from '../ui/RegistrationForm';
import { ROUTE_NAMES } from '../../../shared/router/routeNames';
import { RegistrationInputProps } from '../types/RegistrationInput.types';

export const CreateAccount = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(ROUTE_NAMES.LOGIN);
  };

  const handleSubmitRegistration = (data: RegistrationInputProps) => {
    console.log(data);
  };
  return (
    <RegistrationForm
      handleLogin={handleLogin}
      handleSubmitRegistration={handleSubmitRegistration}
    />
  );
};
