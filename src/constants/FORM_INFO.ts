import { AxiosError } from 'axios';
import authAPI from '@/api/authAPI';
import { InputInfo } from '@/interfaces/componentsInterface';

const SIGN_IN = Object.freeze<InputInfo[]>([
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

const SIGN_UP = Object.freeze<InputInfo[]>([
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
      validate: {
        isDuplicateEmail: async (value) => {
          try {
            await authAPI.isEmailDuplicate(value);
          } catch (e) {
            if (e instanceof AxiosError && e.response?.data.error.message === '이미 존재하는 이메일입니다.')
              return '이미 사용 중인 이메일입니다.';
          }
        },
      },
    },
  },
  {
    id: 'password',
    type: 'password',
    label: '비밀번호',
    placeholder: '영문, 숫자를 조합해 8자 이상 입력해 주세요.',
    validation: {
      required: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=\-{}[\]|\\:;"'<>,.?/~`])[\S]{8,20}$/,
        message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
      },
      minLength: { value: 8, message: '비밀번호는 8글자 이상입니다' },
      maxLength: { value: 20, message: '비밀번호는 20글자 이내입니다' },
    },
  },
  {
    id: 'password_check',
    type: 'password',
    label: '비밀번호 확인',
    placeholder: '비밀번호와 일치하는 값을 입력해 주세요.',
    validation: {
      required: '비밀번호를 다시 입력해주세요.',
      validate: {
        isMatchPassword: (value, { password }) => value === password || '비밀번호가 일치하지 않아요.',
      },
    },
  },
]);

export default { SIGN_IN, SIGN_UP };
