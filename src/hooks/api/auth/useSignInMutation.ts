import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

import routes from '@/constants/routes';
import authAPI from '@/api/auth.api';
import { LoginForm } from '@/interfaces/componentsInterface';

function useSignInMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: async ({ email, password }: LoginForm) => {
      await authAPI.postSignIn({ email, password });
    },

    onSuccess: () => {
      toast.success('로그인이 성공적으로 이루어졌습니다!🤗', { duration: 2000 });
      router.push(routes.folder);
    },
    onError: () => {
      toast.error('로그인에 실패했습니다!😢');
    },
  });
}

export default useSignInMutation;
