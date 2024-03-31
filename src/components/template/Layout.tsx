import { usePathname } from 'next/navigation';
import { styled } from 'styled-components';

import GNB from '@/components/common/gnb/GNB';
import Footer from '@/components/common/footer/Footer';
import { Children } from '@/interfaces/componentsInterface';

const Styled = {
  Body: styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: ${({ theme }) => theme.color.white};
  `,

  Container: styled.div<{ $isFixed: boolean }>`
    padding-top: ${({ $isFixed }) => $isFixed && '9.25rem'};
  `,
};

interface LayoutProps extends Children {}

function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isFixed = pathname !== '/folder';

  return (
    <>
      <GNB $isFixed={isFixed} />
      <Styled.Container className="layout-container" $isFixed={isFixed}>
        {children}
      </Styled.Container>
      <Footer />
    </>
  );
}

export default Layout;
