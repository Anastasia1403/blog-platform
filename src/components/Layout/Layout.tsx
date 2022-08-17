import React from 'react';
import { Header } from 'components/Header';
import { MainBlock } from './styled';

type Props = {
  children: React.ReactNode,
};

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <MainBlock>
        {children}
      </MainBlock>
    </>
  );
}

export default Layout;
