import { useRouter } from 'next/router';
import Button from '@/components/common/button/Button';
import MainLayout from '@/components/template/MainLayout';
import routes from '@/constants/routes';

export default function Home() {
  const router = useRouter();

  const goToSharedPage = () => {
    router.push(routes.shared);
  };

  const goToFoldersPage = () => {
    router.push(routes.folder);
  };

  const goToTest = () => {
    router.push('/test');
  };

  return (
    <MainLayout>
      <div style={{ height: '100vh' }}>
        <div>MainPage comming soon</div>
        <Button style={{ margin: '2rem 1rem 0 0 ' }} onClick={goToSharedPage}>
          공유페이지 바로가기
        </Button>
        <Button onClick={goToFoldersPage}>폴더페이지 바로가기</Button>
        <Button onClick={goToTest}>테스트 바로가기</Button>
      </div>
    </MainLayout>
  );
}
