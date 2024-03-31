import { useRef } from 'react';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';

import IconButton from '@/components/common/button/IconButton';
import SearchIcon from '@/assets/icon/search.svg';
import closeIcon from '@/assets/icon/close-icon.svg';
import handleEnterKeyDown from '@/utils/handleEnterKeyDown';

const Styled = {
  Container: styled.div`
    width: 100%;
    height: 5.4rem;
    padding: 1.5rem 1.6rem;

    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    border-radius: 1rem;
    background-color: #f5f5f5;
  `,

  Input: styled.input`
    width: calc(100% - 1.6rem - 1.6rem);
    height: 100%;
    border: none;
    background: transparent;

    ::placeholder {
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: ${({ theme }) => theme.color.addition};
    }
  `,

  CloseButton: styled(IconButton)`
    width: 2.4rem;
    height: 2.4rem;
    background-color: #e7effb;
  `,
};

interface SearchBarProps {
  placeholder: string;
  uri: string;
  style?: React.CSSProperties;
}

function SearchBar({ placeholder, uri, style }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const navigateToKeyword = (input: string) => {
    const keyword = input?.replace(/(\s*)/g, '');
    if (keyword === '') return;

    router.push({
      pathname: uri,
      search: `?keyword=${keyword}`,
    });
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      router.push({
        pathname: uri,
        search: '',
      });
    }
  };

  return (
    <Styled.Container style={style}>
      <SearchIcon />
      <Styled.Input
        type="text"
        ref={inputRef}
        placeholder={placeholder}
        onKeyDown={(e) => handleEnterKeyDown(e, () => navigateToKeyword(inputRef.current?.value || ''))}
      />
      <Styled.CloseButton icon={closeIcon} onClick={clearInput} />
    </Styled.Container>
  );
}

export default SearchBar;
