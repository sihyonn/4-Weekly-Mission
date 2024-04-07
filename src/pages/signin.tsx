import { styled } from 'styled-components';

import SignLayout from '@/components/template/SignLayout';
import Form from '@/components/common/form/Form';
import Button from '@/components/common/button/Button';
import SignTitle from '@/components/sign/SignTitle';
import SocialMediaSign from '@/components/sign/SocialMediaSign';

import FORM_INFO from '@/constants/FORM_INFO';
import FORM_DEFAULT from '@/constants/FORM_DEFAULT';

const Styled = {
  NormalSign: styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  `,

  SocialSign: styled.section`
    width: 100%;
  `,
};

function signin() {
  return (
    <SignLayout>
      <Styled.NormalSign>
        <SignTitle page="signin" />
        <Form
          onSubmit={() => {
            console.log('제출');
          }}
          inputInfo={FORM_INFO.SIGN_IN}
          defaultValues={FORM_DEFAULT.SIGN_IN}
        >
          <Button type="submit" style={{ width: '100%', marginTop: '1.3rem' }}>
            로그인
          </Button>
        </Form>
      </Styled.NormalSign>
      <Styled.SocialSign>
        <SocialMediaSign message="소셜 로그인" />
      </Styled.SocialSign>
    </SignLayout>
  );
}

export default signin;
