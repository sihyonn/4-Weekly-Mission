import { ReactNode } from 'react';

export interface Children {
  children: ReactNode;
}

/**
 * Form, Input 관련 인터페이스
 */
export interface ValidationRule {
  required: string;
  pattern: {
    value: RegExp;
    message: string;
  };
  maxLength: {
    value: number;
    message: string;
  };
}

export interface InputInfo {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  validation?: ValidationRule;
  errorMsg?: string;
  requireMsg?: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface SignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
}
