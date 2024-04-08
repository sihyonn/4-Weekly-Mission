import API from '@/constants/API';
import instance from '@/api/instance';
import { LoginForm } from '@/interfaces/componentsInterface';

/**
 * 이메일 중복 확인 api
 */
const isEmailDuplicate = async (email: string) => {
  return await instance({
    url: API.AUTH.EMAIL_DUPLICATE,
    method: 'POST',
    data: { email },
  });
};

/**
 * 회원가입 요청 api
 */
const postSignUp = async ({ email, password }: LoginForm) => {
  return await instance({
    url: API.AUTH.SIGN_UP,
    method: 'POST',
    data: { email, password },
  });
};

export default { isEmailDuplicate, postSignUp };
