import React from 'react';

import Button from '../../../Button/Button';

import './Card.scss';

interface CardProps {
  [key: string]: number | string,
  imgSrc: string,
}

const Card: React.FC<CardProps> = ({
  id, species, name, imgSrc,
}) => (
  <div className="card" key={id}>
    <img
      src={imgSrc}
      alt={`${species} ${name}`}
      className="card__image"
    />
    <h4 className="card__title">{name}</h4>
    <Button type="secondary">Learn more </Button>
  </div>
);

export default Card;
