import React, { useState } from 'react';

import navLinks from '../../../config/navLinks';

import './Navigation.scss';

const Nav: React.FC = () => {
  const [activeLink] = useState(1);
  const links = navLinks.map(({ id, name, url }) => {
    const liClassName = (activeLink === id) ? 'navigation__group__link link--active' : 'navigation__group__link';

    return (
      <li className={liClassName} key={id}>
        <a href={url}>{name}</a>
      </li>
    );
  });

  return (
    <nav className="navigation">
      <ul className="navigation__group">
        {links}
      </ul>
    </nav>
  );
};

export default Nav;
