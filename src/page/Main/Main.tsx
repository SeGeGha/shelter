import React, { useEffect } from 'react';

import { useAppContext } from '../../app/AppContext';

import StartScreen from '../../components/StartScreen/StartScreen';
import About from '../../components/About/About';
import Pets from '../../components/Pets/Pets';
import Help from '../../components/Help/Help';
import Donation from '../../components/Donation/Donation';

import './Main.scss';

interface MainProps {
  pagePath: string,
}

const Main: React.FC<MainProps> = ({ pagePath }) => {
  const { pageDidMount } = useAppContext();

  useEffect(() => pageDidMount(pagePath), []);

  return (
    <main id="main-page">
      <StartScreen />
      <About />
      <Pets />
      <Help />
      <Donation />
    </main>
  );
};

export default Main;
