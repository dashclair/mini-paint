import { useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../../shared/router/routeNames';
import { LoginForm } from '../ui/LoginForm';
import { LoginInputProps } from '../types/LoginInput.types';

export const Login = () => {
  const navigate = useNavigate();

  const handleRegistration = () => {
    navigate(ROUTE_NAMES.SIGNUP);
  };

  const handleSubmitForm = (data: LoginInputProps) => {
    console.log(data);
  };

  return <LoginForm handleSubmitForm={handleSubmitForm} handleRegistration={handleRegistration} />;
};
