import { InputInfo } from '@/interfaces/componentsInterface';

export const SIGN_IN = Object.freeze<InputInfo[]>([
  {
    id: 'email',
    label: '이메일',
    type: 'text',
    placeholder: '이메일을 입력해 주세요.',
    validation: {
      required: '이메일을 입력해 주세요.',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: '올바른 이메일 주소가 아닙니다',
      },
    },
  },
  {
    id: 'password',
    type: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력해 주세요.',
    validation: {
      required: '비밀번호를 입력해 주세요.',
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=\-{}[\]|\\:;"'<>,.?/~`])[\S]{8,20}$/,
        message: '영문, 숫자, 특수문자를 포함해 8~20글자 입니다!',
      },
      minLength: { value: 8, message: '비밀번호는 8글자 이상입니다' },
      maxLength: { value: 20, message: '비밀번호는 20글자 이내입니다' },
    },
  },
]);
