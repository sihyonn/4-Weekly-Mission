import { useNavigate } from 'react-router-dom';

import Button from 'components/common/button/Button';
import Form from 'components/common/form/Form';
import MainLayout from 'components/template/MainLayout';
import routes from 'constants/routes';

/**
 * 임시메인페이지
 * todo 메인페이지 만들기
 */

function MainPage() {
  const navigate = useNavigate();

  const goToSharedPage = () => {
    navigate(routes.shared);
  };

  const goToFoldersPage = () => {
    navigate(routes.folder);
  };

  const mock = [
    {
      id: 'eamil',
      label: '이메일',
      type: 'text',
      placeholder: '닉네임 입력(특수문자 제외, 6글자 이내)',
      validation: {
        required: '닉네임을 입력해주세요',
        pattern: {
          value: /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/,
          message: '특수문자를 제외하고 입력해주세요',
        },
        maxLength: { value: 6, message: '6글자 이내로 입력해주세요!' },
      },
    },
    {
      id: 'password',
      label: '비밀번호',
      type: 'password',
      placeholder: '비밀번호 입력',
      validation: {
        required: '비밀번호를 입력해주세요',
        pattern: {
          value: /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/,
          message: '특수문자를 제외하고 입력해주세요',
        },
        maxLength: { value: 12, message: '12글자 이내로 입력해주세요!' },
      },
    },
  ];

  return (
    <MainLayout>
      <div style={{ height: '100vh' }}>
        <div>MainPage comming soon</div>
        <Button style={{ margin: '2rem 1rem 0 0 ' }} onClick={goToSharedPage}>
          공유페이지 바로가기
        </Button>
        <Button onClick={goToFoldersPage}>폴더페이지 바로가기</Button>
        <Form
          onSubmit={() => {
            console.log('제출');
          }}
          inputInfo={mock}
          defaultValues={{ nickname: '' }}
        />
      </div>
    </MainLayout>
  );
}

export default MainPage;
