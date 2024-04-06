import Link from 'next/link';
import { styled } from 'styled-components';

import { SIGNIN_TITLE, SIGNUP_TITLE } from '@/constants/FORM_MESSAGE';
import Logo from '@/assets/icon/linkbraryLogo.svg';

const Styled = {
  Title: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  `,
  Message: styled.span`
    line-height: 2.4rem;

    .link {
      margin-left: 0.8rem;
      font-weight: 600;
      text-decoration: underline;
      color: ${({ theme }) => theme.color.primary};
    }
  `,
};

/**
 * SignTitle - 메인로고와 가입 및 로그인유도 메시지를 포함한 타이틀
 */

function SignTitle({ page }: { page: string }) {
  const pageInfo = page === 'signin' ? SIGNIN_TITLE : SIGNUP_TITLE;

  return (
    <Styled.Title>
      <Logo />
      <Styled.Message>
        {pageInfo.message}
        <Link href={pageInfo.url} className="link">
          {pageInfo.linkLabel}
        </Link>
      </Styled.Message>
    </Styled.Title>
  );
}

export default SignTitle;
