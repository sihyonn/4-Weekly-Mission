import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

import routes from '@/constants/routes';
import authAPI from '@/api/authAPI';
import { LoginForm } from '@/interfaces/componentsInterface';

function useSignUpMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: async ({ email, password }: LoginForm) => {
      await authAPI.postSignUp({ email, password });
    },

    onSuccess: () => {
      toast.success('회원가입이 성공적으로 이루어졌습니다!🤗', { duration: 2000 });
      router.push(routes.folder);
    },
    onError: () => {
      toast.error('회원가입에 실패했습니다!😢');
    },
  });
}

export default useSignUpMutation;
