import Link from 'next/link';
import { styled } from 'styled-components';

import GoogleIcon from '@/assets/icon/google-icon.svg';
import KakaoTalkIcon from '@/assets/icon/kakaotalk-icon.svg';

const Styled = {
  Container: styled.div`
    width: 100%;
    padding: 1.2rem 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 0.8rem;
    border: 1px solid #ccd5e3;
    background: ${({ theme }) => theme.color.gray2};
  `,

  Title: styled.span`
    font-size: 1.4rem;
    line-height: 1.67;
  `,

  Badges: styled.div`
    display: flex;
    gap: 1.6rem;
  `,

  Badge: styled(Link)`
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 99rem;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.google {
      background-color: ${({ theme }) => theme.color.white};
      border: 1px solid #d3d4dd;
    }

    &.kakao {
      background-color: #f5e14b;
    }
  `,
};

function SocialMediaSign({ message }: { message: string }) {
  return (
    <Styled.Container>
      <Styled.Title>{message}</Styled.Title>
      <Styled.Badges>
        <Styled.Badge className="google" href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <GoogleIcon />
        </Styled.Badge>
        <Styled.Badge className="kakao" href="https://www.kakaocorp.com/page" target="_blank" rel="noopener noreferrer">
          <KakaoTalkIcon />
        </Styled.Badge>
      </Styled.Badges>
    </Styled.Container>
  );
}

export default SocialMediaSign;
