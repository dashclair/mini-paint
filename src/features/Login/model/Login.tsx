import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../shared/router/routeNames';
import { LoginForm } from '../ui/LoginForm';
import { LoginInput } from '../types/LoginInput.types';

export const Login = () => {
  const navigate = useNavigate();

  const handleRegistration = () => {
    navigate(RouteNames.SIGNUP);
  };

  const handleSubmitForm = (data: LoginInput) => {
    console.log(data);
  };

  return <LoginForm handleSubmitForm={handleSubmitForm} handleRegistration={handleRegistration} />;
};
