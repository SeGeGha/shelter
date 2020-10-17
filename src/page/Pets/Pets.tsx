import React, { useEffect } from 'react';

import PetsComp from '../../components/Pets/Pets';

import './Pets.scss';

interface PetsProps {
  pageDidMount: (theme: string) => void,
}

const Pets: React.FC<PetsProps> = ({ pageDidMount }) => {
  useEffect(() => pageDidMount('light'), []);

  return (
    <main id="main-page">
      <PetsComp />
    </main>
  );
};

export default Pets;
