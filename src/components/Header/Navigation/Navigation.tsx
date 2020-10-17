import React from 'react';
import { Link } from 'react-router-dom';

import { useAppContext } from '../../../app/AppContext';

import navLinks from '../../../config/navLinks';

import './Navigation.scss';

const Nav: React.FC = () => {
  const { navActiveLink } = useAppContext();
  const links = navLinks.map(({ id, name, url }) => {
    const liClassName = (navActiveLink === id) ? 'navigation__group__link link--active' : 'navigation__group__link';

    return (
      <li className={liClassName} key={id}>
        <Link to={url}>
          {name}
        </Link>
      </li>
    );
  });

  function toggleMenu({ currentTarget: menuBtn }: React.SyntheticEvent) {
    menuBtn.closest('#root').classList.toggle('menu-btn--active');
  }

  return (
    <nav className="navigation">
      <div
        className="navigation__btn"
        onClick={toggleMenu}
        onKeyDown={toggleMenu}
        role="button"
        tabIndex={0}
      >
        <div className="navigation__btn__line" />
      </div>
      <ul className="navigation__group">
        {links}
      </ul>
    </nav>
  );
};

export default Nav;
