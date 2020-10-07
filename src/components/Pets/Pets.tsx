import React from 'react';

import { InnerWrapper } from '../Wrapper/Wrapper';
import Swipper from './Swipper/Swipper';
import Button from '../Button/Button';

import './Pets.scss';

const Pets: React.FC = () => (
  <section id="pets">
    <InnerWrapper isContentWrapper>
      <h3 className="content__heading">
        Our friends who
        <br />
        are looking for a house
      </h3>
      <Swipper />
      <Button type="primary">Get to know the rest</Button>
    </InnerWrapper>
  </section>
);

export default Pets;
