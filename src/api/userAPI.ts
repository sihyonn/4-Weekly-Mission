import instance from '@/api/instance';
import API from '@/constants/API';

/**
 * 유저 정보 조회 api
 */
const getUserInfo = (userId: number) => {
  return instance({
    url: API.USER.BY_ID(userId),
    method: 'GET',
  });
};

export default { getUserInfo };
