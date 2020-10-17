import React, { useEffect } from 'react';

import StartScreen from '../../components/StartScreen/StartScreen';
import About from '../../components/About/About';
import Pets from '../../components/Pets/Pets';
import Help from '../../components/Help/Help';
import Donation from '../../components/Donation/Donation';

import './Main.scss';

interface MainPageProps {
  pageDidMount: (theme: string) => void,
}

const Main: React.FC<MainPageProps> = ({ pageDidMount }) => {
  useEffect(() => pageDidMount('default'), []);

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
