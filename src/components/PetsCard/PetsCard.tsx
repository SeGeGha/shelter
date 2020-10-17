import React from 'react';

import Button from '../Button/Button';

import './PetsCard.scss';

interface PetCardProps {
  name: string,
  type: string,
  img: string,
}

const PetCard: React.FC<PetCardProps> = ({
  name, type, img,
}) => (
  <div className="pet-card">
    <img
      src={img}
      alt={`${type} ${name}`}
    />
    <h4>{name}</h4>
    <Button type="secondary">Learn more</Button>
  </div>
);

export default PetCard;
