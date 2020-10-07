import React from 'react';

import Button from '../../Button/Button';
import Card from './Card/Card';

import petsCards from '../../../config/petsCards';

import './Swipper.scss';

const Swipper: React.FC = () => {
  const cards = petsCards.map((card) => (
    <Card {...card} key={card.id} />
  ));

  return (
    <div className="swipper">
      <Button type="arrow-left">&#10142;</Button>
      {cards}
      <Button type="arrow-right">&#10142;</Button>
    </div>
  );
};

export default Swipper;
