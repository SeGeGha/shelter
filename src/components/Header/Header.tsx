import React from 'react';

import Logo from './Logo/Logo';
import Nav from './Navigation/Navigation';

import './Header.scss';

const Header: React.FC = () => (
  <header id="header">
    <Logo />
    <Nav />
  </header>
);

export default Header;
