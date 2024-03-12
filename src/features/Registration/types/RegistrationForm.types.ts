import { RegistrationInputProps } from './RegistrationInput.types';

export interface RegistrationFormProps {
  handleSubmitRegistration: (data: RegistrationInputProps) => void;
  handleLogin: () => void;
}
