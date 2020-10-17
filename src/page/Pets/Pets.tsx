import React, { useEffect } from 'react';

import { useAppContext } from '../../app/AppContext';

import PetsComp from '../../components/Pets/Pets';

import './Pets.scss';

interface PetsProps {
  pagePath: string,
}

const Pets: React.FC<PetsProps> = ({ pagePath }) => {
  const { pageDidMount } = useAppContext();

  useEffect(() => pageDidMount(pagePath), []);

  return (
    <main id="main-page">
      <PetsComp />
    </main>
  );
};

export default Pets;
