import { useState } from 'react';
import { styled } from 'styled-components';

import InputFormModal from '@/components/folder/modal/InputFormModal';
import AddIcon from '@/assets/icon/add.svg';
import { Children } from '@/interfaces/componentsInterface';

const Styled = {
  Button: styled.button`
    position: fixed;
    bottom: 12rem;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    z-index: 5;

    padding: 0.8rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.color.primary};

    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.gray2};

    @media (min-width: 768px) {
      display: none;
    }
  `,
};

interface FloatButtonProps extends Children {}

function FloatButton({ children, ...htmlButtonProps }: FloatButtonProps) {
  // AddFolderButton과 로직 동일하므로 모바일일때 스타일만 조정되도록 고민해보기
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleFormSubmit = (folderName: string) => {
    console.log(`${folderName} 추가완료!`);
  };

  return (
    <>
      <Styled.Button type="button" onClick={handleButtonClick} {...htmlButtonProps}>
        <div>{children}</div>
        <AddIcon />
      </Styled.Button>
      {isModalOpen && (
        <InputFormModal
          setOpen={setIsModalOpen}
          onSubmit={handleFormSubmit}
          modalTitle="폴더 추가"
          buttonLabel="추가하기"
        />
      )}
    </>
  );
}

export default FloatButton;
