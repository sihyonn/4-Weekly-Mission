import API from '@/constants/API';
import instance from '@/api/instance';

/**
 * 이메일 중복 확인 api
 */
const isEmailDuplicate = async ({ email }: { email: string }) => {
  return await instance({
    url: API.AUTH.EMAIL_DUPLICATE,
    method: 'POST',
    data: { email },
  });
};

export default { isEmailDuplicate };
