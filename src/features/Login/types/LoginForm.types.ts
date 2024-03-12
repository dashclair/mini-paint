import { LoginInputProps } from './LoginInput.types';

export interface LoginFormProps {
  handleSubmitForm: (data: LoginInputProps) => void;
  handleRegistration: () => void;
}
