import { styled } from 'styled-components';
import { Children } from '@/interfaces/componentsInterface';

const Styled = {
  Container: styled.div`
    width: 100%;
    height: 100vh;

    padding-top: 23.8rem;

    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.background};

    @media (min-width: 768px) and (max-width: 1199px) {
      padding-top: 20rem;
    }
    @media (max-width: 767px) {
      padding: 12rem 3.2rem 0;
    }
  `,

  InnerWrap: styled.div`
    width: 40rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
  `,
};

/**
 * SignLayout - 로그인, 회원가입 페이지 레이아웃
 */
interface SignLayoutProps extends Children {}

function SignLayout({ children }: SignLayoutProps) {
  return (
    <>
      <Styled.Container>
        <Styled.InnerWrap>{children}</Styled.InnerWrap>
      </Styled.Container>
    </>
  );
}

export default SignLayout;
