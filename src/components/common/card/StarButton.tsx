import { HTMLAttributes } from 'react';
import { styled } from 'styled-components';

import FilledStar from '@/assets/icon/filledStar.svg';
import Emptystar from '@/assets/icon/emptyStar.svg';

const Styled = {
  Container: styled.button`
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

interface StarButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

function StarButton({ isActive, ...htmlButtonProps }: StarButtonProps) {
  return (
    <Styled.Container {...htmlButtonProps} onClick={(e) => e.preventDefault()}>
      {isActive ? <FilledStar /> : <Emptystar />}
    </Styled.Container>
  );
}

export default StarButton;
