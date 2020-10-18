/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';

import { useAppContext } from '../../../app/AppContext';

import navLinks from '../../../config/navLinks';

import './Navigation.scss';

const Nav: React.FC = () => {
  const { navActiveLink, toggleMobileMenu } = useAppContext();
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

  return (
    <nav
      className="navigation"
      onClick={({ target, currentTarget }) => {
        if (currentTarget === target) {
          toggleMobileMenu();
        }
      }}
    >
      <div
        className="navigation__btn"
        onClick={toggleMobileMenu}
        onKeyDown={() => {}}
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
