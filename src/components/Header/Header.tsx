import React from 'react';

import { useAppContext } from '../../app/AppContext';

import { InnerWrapper } from '../Wrapper/Wrapper';
import Logo from './Logo/Logo';
import Nav from './Navigation/Navigation';

import './Header.scss';

const Header: React.FC = () => {
  const { headerTheme } = useAppContext();
  return (
    <header id="header" className={`${headerTheme}-theme`}>
      <InnerWrapper isContentWrapper>
        <Logo />
        <Nav />
      </InnerWrapper>
    </header>
  );
};

export default Header;
