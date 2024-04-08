import { styled } from 'styled-components';

import Button from '@/components/common/button/Button';
import Form from '@/components/common/form/Form';
import SignTitle from '@/components/sign/SignTitle';
import SocialMediaSign from '@/components/sign/SocialMediaSign';
import SignLayout from '@/components/template/SignLayout';

import FORM_INFO from '@/constants/FORM_INFO';
import FORM_DEFAULT from '@/constants/FORM_DEFAULT';
import useSignUpMutation from '@/hooks/api/auth/useSignUpMutation';

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

function signup() {
  const { mutate } = useSignUpMutation();

  return (
    <SignLayout>
      <Styled.NormalSign>
        <SignTitle page="signup" />
        <Form
          onSubmit={(data) => {
            mutate({ email: data.email, password: data.password });
          }}
          inputInfo={FORM_INFO.SIGN_UP}
          defaultValues={FORM_DEFAULT.SIGN_UP}
        >
          <Button type="submit" style={{ width: '100%', marginTop: '1.3rem' }}>
            회원가입
          </Button>
        </Form>
      </Styled.NormalSign>
      <Styled.SocialSign>
        <SocialMediaSign message="다른 방식으로 가입하기" />
      </Styled.SocialSign>
    </SignLayout>
  );
}

export default signup;
