import { LoginInput } from './LoginInput.types';

export interface LoginFormProps {
  handleSubmitForm: (data: LoginInput) => void;
  handleRegistration: () => void;
}
