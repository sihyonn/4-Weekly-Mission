import { useEffect } from 'react';
import { useRouter } from 'next/router';

function useAuthRedirect() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) router.push('/folder');
  }, [router]);
}

export default useAuthRedirect;
