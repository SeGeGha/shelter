import React from 'react';
import { Link } from 'react-router-dom';

import Routes from '../../../config/routes';

import './Logo.scss';

const Logo: React.FC = () => (
  <Link to={Routes.MainPage} className="logo">
    <h1 className="logo__title">Cozy House</h1>
    <p className="logo__subtitle">Shelter for pets in Boston</p>
  </Link>
);

export default Logo;
