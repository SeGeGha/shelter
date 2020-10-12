import React from 'react';

import { InnerWrapper } from '../Wrapper/Wrapper';
import Logo from './Logo/Logo';
import Nav from './Navigation/Navigation';

import './Header.scss';

const Header: React.FC = () => (
  <header id="header">
  <InnerWrapper isContentWrapper>
    <Logo />
    <Nav />
  </InnerWrapper>
  </header>
);

export default Header;
