import API from '@/constants/API';
import instance from '@/api/instance';
import { LoginForm } from '@/interfaces/componentsInterface';

/**
 * 이메일 중복 확인 api
 */
const isEmailDuplicate = (email: string) => {
  return instance({
    url: API.AUTH.EMAIL_DUPLICATE,
    method: 'POST',
    data: { email },
  });
};

/**
 * 회원가입 요청 api
 */
const postSignUp = ({ email, password }: LoginForm) => {
  return instance({
    url: API.AUTH.SIGN_UP,
    method: 'POST',
    data: { email, password },
  });
};

/**
 * 로그인 요청 api
 */
const postSignIn = ({ email, password }: LoginForm) => {
  return instance({
    url: API.AUTH.SIGN_IN,
    method: 'POST',
    data: { email, password },
  });
};

export default { isEmailDuplicate, postSignUp, postSignIn };
