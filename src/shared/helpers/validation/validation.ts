export const passwordValidationRules = {
  required: 'Password is required',
  minLength: {
    value: 8,
    message: 'Password must be at least 8 characters',
  },
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
    message: 'Password must include both capitalized and uncapitalized letters',
  },
};

export const emailValidationRules = {
  required: 'Email is required',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Invalid email format',
  },
};
