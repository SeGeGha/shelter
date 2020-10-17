import React from 'react';

import { InnerWrapper } from '../Wrapper/Wrapper';
import Logo from './Logo/Logo';
import Nav from './Navigation/Navigation';

import './Header.scss';

interface HeaderProps {
  theme?: string,
}

const Header: React.FC<HeaderProps> = ({ theme }) => (
  <header id="header" className={theme ? 'light-theme' : ''}>
    <InnerWrapper isContentWrapper>
      <Logo />
      <Nav />
    </InnerWrapper>
  </header>
);

export default Header;
