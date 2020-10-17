import React from 'react';
import { Link } from 'react-router-dom';

import { InnerWrapper } from '../Wrapper/Wrapper';
import Swipper from './Swipper/Swipper';
import Button from '../Button/Button';

import Routes from '../../config/routes';

import './Pets.scss';

const Pets: React.FC = () => {
  const isMainPage = window.location.pathname === Routes.MainPage;

  return (
    <section id="pets">
      <InnerWrapper isContentWrapper>
        <h3 className="content__heading">
          Our friends who
          <br />
          are looking for a house
        </h3>
        <Swipper />
        {isMainPage && (
          <Link to={Routes.PetsPage}>
            <Button type="primary">Get to know the rest</Button>
          </Link>
        )}
      </InnerWrapper>
    </section>
  );
};

export default Pets;
